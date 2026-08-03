import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # Replace the capitalized ones unconditionally
        content = content.replace('Equibudx', 'EquiBudX')
        content = content.replace('EQUIBUDX', 'EquiBudX')
        
        # Replace lowercase unless it's part of the db name, server package, or similar technical strings
        # We'll use a regex function to selectively replace 'equibudx'
        def lower_replace(match):
            full = match.group(0)
            if 'dev' in full or 'server' in full or 'client' in full or 'db' in full:
                return full
            return 'EquiBudX'

        # Safely target 'equibudx' by checking context, or just replace it since
        # package.json 'name' doesn't technically matter for a local dev project unless published.
        # But let's avoid 'equibudx_dev' and 'equibudx-'
        content = re.sub(r'equibudx(?:_dev|-server|-client)?', lower_replace, content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Failed {filepath}: {e}")

def main():
    exclude_dirs = {'.git', 'node_modules', 'dist', 'build', '.agents'}
    exclude_files = {'package-lock.json', 'rename.py', 'rename2.py'}
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file in exclude_files:
                continue
            filepath = os.path.join(root, file)
            if filepath.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.css', '.env', '.prisma')):
                replace_in_file(filepath)

if __name__ == "__main__":
    main()
