import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        # Replacements
        content = re.sub(r'MockMate', 'Equibudx', content)
        content = re.sub(r'mockmate', 'equibudx', content)
        content = re.sub(r'Mockmate', 'Equibudx', content)
        content = re.sub(r'MOCKMATE', 'EQUIBUDX', content)
        content = re.sub(r'Mock Mate', 'Equibudx', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Failed {filepath}: {e}")

def main():
    exclude_dirs = {'.git', 'node_modules', 'dist', 'build', '.agents'}
    exclude_files = {'package-lock.json', 'rename.py'}
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file in exclude_files:
                continue
            filepath = os.path.join(root, file)
            # Only process likely text files based on extension, or process all and catch exceptions
            if filepath.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.css', '.env', '.prisma')):
                replace_in_file(filepath)

if __name__ == "__main__":
    main()
