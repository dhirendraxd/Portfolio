# SEO Validation Script
# This validates our JSON-LD structured data and checks for common SEO issues

import json
import re

def validate_json_ld(html_content):
    """Extract and validate JSON-LD structured data"""
    script_pattern = r'<script type="application/ld\+json">(.*?)</script>'
    matches = re.findall(script_pattern, html_content, re.DOTALL)
    
    results = []
    for i, match in enumerate(matches):
        try:
            data = json.loads(match.strip())
            results.append({
                'valid': True,
                'data': data,
                'script_number': i + 1
            })
        except json.JSONDecodeError as e:
            results.append({
                'valid': False,
                'error': str(e),
                'script_number': i + 1
            })
    
    return results

def check_seo_basics(html_content):
    """Check for basic SEO requirements"""
    checks = {}
    
    # Title tag
    title_match = re.search(r'<title>(.*?)</title>', html_content)
    checks['has_title'] = bool(title_match)
    if title_match:
        checks['title_length'] = len(title_match.group(1))
        checks['title_text'] = title_match.group(1)
    
    # Meta description
    desc_match = re.search(r'<meta name="description" content="(.*?)"', html_content)
    checks['has_meta_description'] = bool(desc_match)
    if desc_match:
        checks['description_length'] = len(desc_match.group(1))
        checks['description_text'] = desc_match.group(1)
    
    # Canonical URL
    canonical_match = re.search(r'<link rel="canonical" href="(.*?)"', html_content)
    checks['has_canonical'] = bool(canonical_match)
    if canonical_match:
        checks['canonical_url'] = canonical_match.group(1)
    
    # Open Graph image
    og_image_match = re.search(r'<meta property="og:image" content="(.*?)"', html_content)
    checks['has_og_image'] = bool(og_image_match)
    if og_image_match:
        checks['og_image_url'] = og_image_match.group(1)
    
    # Robots meta
    robots_match = re.search(r'<meta name="robots" content="(.*?)"', html_content)
    checks['has_robots_meta'] = bool(robots_match)
    if robots_match:
        checks['robots_content'] = robots_match.group(1)
    
    return checks

# Test with built HTML
try:
    with open('dist/index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("🔍 SEO VALIDATION REPORT")
    print("=" * 50)
    
    # Validate JSON-LD
    json_ld_results = validate_json_ld(html_content)
    print(f"\n📋 JSON-LD Structured Data: {len(json_ld_results)} scripts found")
    for result in json_ld_results:
        if result['valid']:
            print(f"  ✅ Script {result['script_number']}: Valid JSON-LD")
            data = result['data']
            if '@type' in data:
                print(f"     Type: {data['@type']}")
            if 'name' in data:
                print(f"     Name: {data['name']}")
        else:
            print(f"  ❌ Script {result['script_number']}: Invalid - {result['error']}")
    
    # Check SEO basics
    seo_checks = check_seo_basics(html_content)
    print(f"\n📊 Basic SEO Checks:")
    
    print(f"  Title Tag: {'✅' if seo_checks['has_title'] else '❌'}")
    if seo_checks['has_title']:
        length = seo_checks['title_length']
        status = "✅" if 30 <= length <= 60 else "⚠️"
        print(f"    Length: {length} chars {status}")
        print(f"    Text: {seo_checks['title_text']}")
    
    print(f"  Meta Description: {'✅' if seo_checks['has_meta_description'] else '❌'}")
    if seo_checks['has_meta_description']:
        length = seo_checks['description_length']
        status = "✅" if 120 <= length <= 160 else "⚠️"
        print(f"    Length: {length} chars {status}")
    
    print(f"  Canonical URL: {'✅' if seo_checks['has_canonical'] else '❌'}")
    if seo_checks['has_canonical']:
        print(f"    URL: {seo_checks['canonical_url']}")
    
    print(f"  Open Graph Image: {'✅' if seo_checks['has_og_image'] else '❌'}")
    if seo_checks['has_og_image']:
        print(f"    URL: {seo_checks['og_image_url']}")
    
    print(f"  Robots Meta: {'✅' if seo_checks['has_robots_meta'] else '❌'}")
    if seo_checks['has_robots_meta']:
        print(f"    Content: {seo_checks['robots_content']}")

except FileNotFoundError:
    print("❌ dist/index.html not found. Run 'npm run build' first.")
except Exception as e:
    print(f"❌ Error: {e}")