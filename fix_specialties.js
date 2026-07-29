const fs = require('fs');
let code = fs.readFileSync('src/components/Specialties.tsx', 'utf8');

// Replace main section class
code = code.replace('<section id="products" className="py-24 bg-forest-green text-ivory">', '<section id="products" className="py-24 bg-ivory text-forest-green">');

// Replace colors inside the component
// border-ivory/10 -> border-forest-green/10
code = code.replace(/border-ivory\/10/g, 'border-forest-green/10');
// text-ivory/90 -> text-forest-green/90
code = code.replace(/text-ivory\/90/g, 'text-forest-green/90');
// text-ivory/80 -> text-forest-green/80
code = code.replace(/text-ivory\/80/g, 'text-forest-green/80');
// text-ivory/60 -> text-forest-green/60
code = code.replace(/text-ivory\/60/g, 'text-forest-green/60');
// bg-ivory/5 -> bg-forest-green/5
code = code.replace(/bg-ivory\/5/g, 'bg-forest-green/5');
// bg-ivory/10 -> bg-forest-green/10
code = code.replace(/bg-ivory\/10/g, 'bg-forest-green/10');

// "bg-forest-green" used in overlays/backgrounds of cards
// Some should be bg-ivory or bg-forest-green/5
// Let's manually inspect those.

fs.writeFileSync('src/components/Specialties.tsx', code);
