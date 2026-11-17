/* ===== EDIT YOUR PROJECTS HERE =====
 P  = architecture / interior projects      PR = product design
 - Images: put files in the "images" folder, then use "your-file.jpg"
 - Use "" instead of an image path to show a placeholder
 - Keep the commas and quotes exactly as they are
 - SLIDESHOW: the photos listed in img:[...] change automatically. The opening-screen slideshow is the HERO list below.
 - VIDEO: upload an .mp4 to the repository, then write video:"my-video.mp4" (keep it under 25 MB).
   For a long video, upload it to YouTube (Unlisted) and write youtube:"VIDEO_ID" (the part after v= in the link).
*/
var HERO=[
 {img:"bookstore-1.jpg",cap:"Story Bookstore, Kolkata",sub:"Turnkey · Completed"},
 {img:"opus-1.jpg",cap:"The Opus, Dubai",sub:"Turnkey · Completed"},
 {img:"loreal-1.jpg",cap:"L’Oréal Offices, Mumbai",sub:"Planning + interiors"},
 {img:"vrs-office-1.jpg",cap:"VRS Foods Office, New Delhi",sub:"Turnkey"},
 {img:"dca-office-1.jpg",cap:"Office GroupDCA, Gwal Pahari",sub:"Completed"}
];
var P=[
{n:"Story Bookstore",loc:"Primarc, Kolkata",area:"1,607 sq ft",stage:"Completed",scope:"Turnkey · planning + interiors",
 video:["Story-walkthrough.mp4","Story-walkthrough2.mp4"],
 youtube:"",
 img:["bookstore-1.jpg","bookstore-2.jpg","bookstore-3.jpg","bookstore-4.jpg","bookstore-5.jpg"],
 d:"A bookstore built around continuity and flow: an open-concept hall with metal railings, a mirrored ceiling and a “ladder hall” where bookcases become the stairs.",
 role:"Interior Architect, Group DCA",c:"Space planning and interior design from plans and elevations through to turnkey delivery."},
{n:"L’Oréal Offices",loc:"Mumbai (also Kolkata &amp; Bangalore)",area:"63,535 + 16,377 sq ft",stage:"Ongoing",scope:"Planning + interiors",
 video:"",
 youtube:"",
 img:["loreal-1.jpg","loreal-2.jpg","loreal-3.jpg","loreal-4.jpg","loreal-5.jpg","loreal-6.jpg","loreal-7.jpg","loreal-8.jpg","loreal-9.jpg"],
 d:"Workplace and academy blending modern technology with an Indian aesthetic: open rafter ceilings, a cafeteria and seminar floor, and a terrace designed as a biodiversity park.",
 role:"Interior Architect, Group DCA",c:"Layouts, ceiling and lighting design, material specification and site coordination across floors."},
{n:"VRS Foods Office",loc:"Malviya Nagar, New Delhi",area:"7,986 sq ft",stage:"Almost complete",scope:"Turnkey · planning + interiors incl. furniture",
 video:"",
 youtube:"",
 img:["vrs-office-1.jpg","vrs-office-2.jpg"],
 d:"A monochrome, black-and-white office for six directors, using transparent partitions and fluted glass doors to play with natural light and shadow.",
 role:"Interior Architect, Group DCA",c:"Planning, interior design and furniture, delivered turnkey."},
{n:"The Opus",loc:"Dubai",area:"",stage:"Completed",scope:"Turnkey · planning + interiors",
 video:"",
 youtube:"",
 img:["opus-1.jpg","opus-2.jpg","opus-3.jpg","opus-4.jpg","opus-5.jpg","opus-6.jpg","opus-7.jpg"],
 d:"A sophisticated office blending wooden and classical elements, with a circular reception, textured ceiling details and a distinctive grid-style workstation area.",
 role:"Interior Architect, Group DCA",c:"Concept and interior design, ceiling and reception detailing."},
{n:"Office GroupDCA",loc:"Jamun Grove, Gwal Pahari",area:"",stage:"Completed",scope:"Planning + interiors",
 video:"",
 youtube:"",
 img:["dca-office-1.jpg","dca-office-2.jpg","dca-office-3.jpg","dca-office-4.jpg"],
 d:"A studio office designed around the existing trees on site, as four distinct blocks built from local, natural materials: terracotta brick paving to cool the surroundings, raw Aerocon cement panels, a thatched roof made by local villagers and stone masonry walls.",
 role:"Interior Architect, Group DCA",c:"Planning and interior design for a simple, sustainable workplace that sits quietly in its landscape."},
{n:"Neoliv Clubhouse",loc:"Sonipat, Haryana",area:"",stage:"Ongoing",scope:"Planning + interiors",
 video:"",
 youtube:"",
 img:["Neoliv-1.png","Neoliv-2.png","Neoliv-3.png","Neoliv-4.png"],
 d:"A clubhouse interior with generous glazing and planting that brings the landscape into the space.",
 role:"Interior Designer, BDP",c:"Concept design and interior layouts, coordinated with consultants and contractors."}
];
var PR=[
{n:"Marquetry Table",stage:"Completed",scope:"Furniture",mat:"Oak, teak stain, plywood",
 brief:"A marquetry pattern built on oakwood, stained in lighter and darker teak shades so grain and texture carry the design.",
 steps:[["Explore","Trial compositions to see how grain and texture complement the intended pattern."],["Stain","Oak veneers stained in a blend of light and dark teak tones."],["Assemble","Stained veneers arranged piece by piece onto the plywood base, every joint aligned."],["Result","A balanced pattern with a precise edge detail that shows the oak’s natural beauty."]],
 video:"",
 youtube:"",
 g:[["marquetry-table-finished.jpg","Finished table"],["marquetry-table-pattern.jpg","Pattern exploration"],["marquetry-table-drawings.jpg","Technical drawings"]]},
{n:"Abstract Coffee Table",stage:"Completed",scope:"Furniture",mat:"Antique brass, stone top",
 brief:"An unconventional, rustic coffee table with the charm of an antique brass finish, balancing irregularity with sophistication.",
 steps:[["Concept","Started from a fascination with rustic aesthetics and the allure of antique brass."],["Form","Asymmetry and organic shapes, tested across three table-top iterations."],["Material","Hand-distressing to accentuate the brass, with a stone top set into the flowing form."],["Result","A rugged yet refined piece that pushes the boundaries of traditional furniture."]],
 video:"",
 youtube:"",
 g:[["coffee-table-finished.jpg","Finished table"],["coffee-table-process.jpg","Design process and drawings"]]},
{n:"Abstract TV Console cum Study",stage:"Completed",scope:"Furniture",mat:"Oak veneer, natural finishes",
 brief:"One versatile piece combining a TV console and a study desk in an abstract, fluid design language.",
 steps:[["Idea","Blend function with artistic expression: fluid lines and shapes that suggest movement."],["Explore","Asymmetrical arrangements and varying depths, compared across two elevation options."],["Function","Media storage, cable management, push-to-open shutters, open shelves and generous work surface."],["Result","A cohesive piece that suits both living and working spaces."]],
 video:"",
 youtube:"",
 g:[["tv-console-finished.jpg","Finished piece"],["tv-console-process-1.jpg","Console 1 — design process"],["tv-console-process-2.jpg","Console 2 — design process"]]}
];
