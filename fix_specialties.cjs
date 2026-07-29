const fs = require('fs');
let code = fs.readFileSync('src/components/Specialties.tsx', 'utf8');

// Replace main section class
code = code.replace('<section id="products" className="py-24 bg-forest-green text-ivory">', '<section id="products" className="py-24 bg-ivory text-forest-green">');

code = code.replace(/border-ivory\/10/g, 'border-forest-green/10');
code = code.replace(/text-ivory\/90/g, 'text-forest-green/90');
code = code.replace(/text-ivory\/80/g, 'text-forest-green/80');
code = code.replace(/text-ivory\/60/g, 'text-forest-green/60');
code = code.replace(/bg-ivory\/5/g, 'bg-forest-green/5');
code = code.replace(/bg-ivory\/10/g, 'bg-forest-green/10');

// There are a few specific places that used bg-forest-green inside the dark theme.
// We should check what they are.

fs.writeFileSync('src/components/Specialties.tsx', code);
