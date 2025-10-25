#!/usr/bin/env python3
"""
Automatically wrap all pages with AutoTranslate component
"""
import os
import re

# Define the pages directory
PAGES_DIR = "/Users/rayen/Desktop/Website-ELITE-CARE-TRAVEL/client/src/pages"

# Pages to process (exclude NotFound)
PAGES_TO_PROCESS = [
    "ChirurgieEsthetique.tsx",
    "ChirurgieObesite.tsx",
    "ChirurgieOrthopedique.tsx",
    "Contact.tsx",
    "Gynecologie.tsx",
    "NosPartenaires.tsx",
    "NosServices.tsx",
    "NotreDemarche.tsx",
    "Ophthalmologie.tsx",
    "PiedDiabetique.tsx",
    "Prices.tsx"
]

def wrap_text_elements(content):
    """Wrap text elements with AutoTranslate"""
    
    # Add AutoTranslate import if not present
    if 'import AutoTranslate' not in content:
        # Find the last import statement
        import_pattern = r'(import .* from .*;)\n'
        imports = list(re.finditer(import_pattern, content))
        if imports:
            last_import = imports[-1]
            insert_pos = last_import.end()
            content = content[:insert_pos] + 'import AutoTranslate from "../components/AutoTranslate";\n' + content[insert_pos:]
    
    # Patterns to wrap (order matters - do complex patterns first)
    patterns = [
        # h1 tags
        (r'<h1\s+className="([^"]*)"([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h1>',
         r'<AutoTranslate as="h1" className="\1"\2>\3</AutoTranslate>'),
        (r'<h1([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h1>',
         r'<AutoTranslate as="h1"\1>\2</AutoTranslate>'),
        
        # h2 tags
        (r'<h2\s+className="([^"]*)"([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h2>',
         r'<AutoTranslate as="h2" className="\1"\2>\3</AutoTranslate>'),
        (r'<h2([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h2>',
         r'<AutoTranslate as="h2"\1>\2</AutoTranslate>'),
        
        # h3 tags
        (r'<h3\s+className="([^"]*)"([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h3>',
         r'<AutoTranslate as="h3" className="\1"\2>\3</AutoTranslate>'),
        (r'<h3([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</h3>',
         r'<AutoTranslate as="h3"\1>\2</AutoTranslate>'),
        
        # p tags with className
        (r'<p\s+className="([^"]*)"([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</p>',
         r'<AutoTranslate as="p" className="\1"\2>\3</AutoTranslate>'),
        (r'<p([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</p>',
         r'<AutoTranslate as="p"\1>\2</AutoTranslate>'),
        
        # li tags
        (r'<li\s+className="([^"]*)"([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</li>',
         r'<li className="\1"\2><AutoTranslate>\3</AutoTranslate></li>'),
        (r'<li([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</li>',
         r'<li\1><AutoTranslate>\2</AutoTranslate></li>'),
        
        # button text
        (r'<button([^>]*)>\s*\n?\s*([^<]+)\s*\n?\s*</button>',
         r'<button\1><AutoTranslate>\2</AutoTranslate></button>'),
        
        # Link text (be careful not to wrap icons)
        (r'(<Link[^>]*>)\s*([A-Za-zÀ-ÿ\s]+)\s*(</Link>)',
         r'\1<AutoTranslate>\2</AutoTranslate>\3'),
    ]
    
    for pattern, replacement in patterns:
        # Skip if already wrapped
        content = re.sub(pattern, replacement, content)
    
    return content

def process_file(filepath):
    """Process a single file"""
    print(f"Processing {os.path.basename(filepath)}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already processed
    if 'AutoTranslate' in content and content.count('AutoTranslate') > 5:
        print(f"  ⚠️  {os.path.basename(filepath)} already seems processed, skipping...")
        return
    
    # Wrap text elements
    new_content = wrap_text_elements(content)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  ✅ {os.path.basename(filepath)} processed")

def main():
    print("=" * 60)
    print("AUTO-TRANSLATION WRAPPER")
    print("=" * 60)
    print()
    
    for page in PAGES_TO_PROCESS:
        filepath = os.path.join(PAGES_DIR, page)
        if os.path.exists(filepath):
            try:
                process_file(filepath)
            except Exception as e:
                print(f"  ❌ Error processing {page}: {e}")
        else:
            print(f"  ⚠️  {page} not found")
    
    print()
    print("=" * 60)
    print("✅ COMPLETE!")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Test your site at http://localhost:5173")
    print("2. Switch languages using the language switcher")
    print("3. Verify all text translates correctly")

if __name__ == "__main__":
    main()
