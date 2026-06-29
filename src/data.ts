import { Project, SpecItem } from './types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3hdQjvR80yu8c--ZAooaysWTu4MU-RL0wKsZ9u2aycYWD9T2HSTb5uu6MeW6bPe7IQUqP7Th0hwyD6ZocBZRazBhWaHfJAeM9tNoLD01Ay4twe_RX5XmDLPxEurUBjD35QA_6OuqYUeuyhmQF14vhwYJnaAWSGFNCzL1pfZRvJjyoWXjWamEz-byQ-J3uMjk_yW-i5Uy1nbDS2YANE7dRqXFPqurW3Kt8Yv7xGSJaXHFzxJ2GV_qpitaLsarkdT6HAg1wgjOQvTk=s0';

export const PROJECTS: Project[] = [
  {
    id: 'smart-planter',
    title: 'Smart Planter Humidifier',
    category: 'rendering',
    imageUrl: '/src/assets/images/smart_planter_render_1782671885923.jpg',
    description: 'An elegant smart home device merging nature with modern product design. Features precise fluted oak siding, dual-well water monitoring, and custom-designed monstera plant geometry.',
    software: ['Blender', 'Substance Painter', 'V-Ray'],
    specs: {
      triangles: '215,000 tris',
      vertices: '110,400 verts',
      textures: '3x 4K PBR Sets',
      renderTime: '2h 15m'
    }
  },
  {
    id: 'tactical-drone',
    title: 'FPV Tactical Strike Drone',
    category: 'modeling',
    imageUrl: '/src/assets/images/tactical_drone_render_1782671902576.jpg',
    description: 'A fully realized tactical FPV quadcopter. Built with accurate mechanical carbon-fiber plates, industrial straps, a high-capacity modular battery pack, and high-fidelity projectile payload geometry.',
    software: ['Blender', 'Substance Painter', 'Photoshop'],
    specs: {
      triangles: '340,000 tris',
      vertices: '175,200 verts',
      textures: '4x 4K PBR Sets',
      renderTime: '1h 45m'
    }
  },
  {
    id: 'headphones',
    title: 'JBL Pro Series Headphones',
    category: 'modeling',
    imageUrl: HERO_IMAGE,
    wireframeUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3hdQjvR80yu8c--ZAooaysWTu4MU-RL0wKsZ9u2aycYWD9T2HSTb5uu6MeW6bPe7IQUqP7Th0hwyD6ZocBZRazBhWaHfJAeM9tNoLD01Ay4twe_RX5XmDLPxEurUBjD35QA_6OuqYUeuyhmQF14vhwYJnaAWSGFNCzL1pfZRvJjyoWXjWamEz-byQ-J3uMjk_yW-i5Uy1nbDS2YANE7dRqXFPqurW3Kt8Yv7xGSJaXHFzxJ2GV_qpitaLsarkdT6HAg1wgjOQvTk=s0',
    description: 'High-fidelity hard surface model of studio reference headphones. Sculpted with focus on precise physical details, stitches, foam leather ergonomics, and micro-branding alignment.',
    software: ['Blender', 'Substance Painter', 'V-Ray'],
    specs: {
      triangles: '142,500 tris',
      vertices: '72,120 verts',
      textures: '2x 4K PBR Sets',
      renderTime: '1h 24m'
    }
  },
  {
    id: 'cutting-mat-files',
    title: 'Blenderizm 3D Print STL Files',
    category: 'modeling',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZkgHCaijXP0cp9je9qNHCoNb6B3yCZgLg7fkoL5a8mAul9ZVVrK5U0D2cPRrEmO0q3oVclPnCObba0f2bblS_CBQZa_mAshVlH0wIFecvV6le3Ob83MgNnlzZ2JTwFa84MpN3hESloQRZ4tdsudClIksoCRhWrTTqymkvpUfnojQzfww3oqayctPK6gDev56cjBqeEy6HCOtwCnzzSVd1XBmJjdycfPQjnlbTLloyP7lSdCz8u1Yp5QY3I3Nw7kqPXVvUvjB9A38=s0',
    description: 'Watertight STL preparing system featuring high-density thread modeling, clean topology, and structural optimization for flawless SLA/FDM 3D printing results.',
    software: ['Blender', 'Photoshop'],
    specs: {
      triangles: '894,200 tris',
      vertices: '448,100 verts',
      textures: '1x 2K Preview Set',
      renderTime: '45m'
    }
  },
  {
    id: 'studio-art-room',
    title: 'Visual Exhibition & Studio Space',
    category: 'rendering',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4qZSYXivMY9aHqh7ZFUIZsp5O6rPned_G68lJWrzz5Yb2mJUXprGjHq1Uapz7meZzucDDQF1Yqj6FIuCFOVBzKLducvOkF3L-XzazYjYBpWugbWVXmHp-n7rLX79eAipqhGFjzkbih9-aLPaZCFSgnyPAxPIxNDJowNjwZcucPNhWasmcqHaANQKfcNE---JDI_YYczF4Vkam_3Z6uIQn84szHg4w4_lyjY49lNx2gemaJnS-9kqjQu_uHuAdZZTKxC9ayY5pAvg=s0',
    description: 'An architectural visualization of a high-tech museum/studio room displaying technical 3D frames. Utilizes customized global illumination paths and physical light distribution.',
    software: ['Blender', 'V-Ray', 'Photoshop'],
    specs: {
      triangles: '2,450,000 tris',
      vertices: '1,320,000 verts',
      textures: '5x 4K PBR Sets',
      renderTime: '4h 15m'
    }
  },
  {
    id: 'industrial-valves',
    title: 'Substance Valve Mechanism',
    category: 'texturing',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRClkpQL6ZnNno5fU_gxAl-c0gOUxZzn_2ZqCHNXbVlNZZO1jdmv0bjhUt08HI3GrjxeXcA2OLwVjNgbNwSLa4sXO8BuYguBoBcq-K1e5GVYwXyMPDZMhznNF953Bro2Rf0l0IWHAFJ2VLNI8GLnXMj2LcSTZWTBA53ktGNT0IBy9RsVDvkmAleg0tM_qHPcL4QO9tijsCS7mtXvJxac8XcCfjxHuQeud-8skT26NWHW_wPje5uSEmuPHfA8c_lLNlEg1npgl9Mo=s0',
    description: 'Brass values and copper pipe joints texturing using multi-channel Substance Painter workflows. Showcases advanced procedural weathering, rust buildup, and brass alloy corrosion.',
    software: ['Substance Painter', 'Blender'],
    specs: {
      triangles: '58,000 tris',
      vertices: '31,200 verts',
      textures: '3x 8K UDIM Sets',
      renderTime: '2h 10m'
    }
  },
  {
    id: 'timber-window',
    title: 'Double-Glazed Wooden Profile',
    category: 'rendering',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTloPqBsr725UMO1vSnUtGg5p1ZZan-Hmkxg03L30AbZNBXGmWLbkIwU03H8UQ9ZhIjvcmDwV3OhQP3M3O3nVp531AW9TAcMhqIArhAGg_7Lc-Pm5VbEuehp780ncKYZts2FWFSX456X68PXzra4PBQ9e2Sn3PVkDDgQzwal5EYB-_LPyzXd9oiDkZCud2IshQ6FIecxfPNTWAoUFnBeNDF68cqTwJykx4FIVpykwkO2lvKfKbeCjHfpu2mYtMkTIsVemKJ5ittlU=s0',
    description: 'High-end product visual rendering of wooden profile architecture. Extreme details of gaskets, triple pane glass index of refraction, and structural pine wood grains.',
    software: ['V-Ray', 'Blender'],
    specs: {
      triangles: '184,000 tris',
      vertices: '94,500 verts',
      textures: '2x 4K PBR Sets',
      renderTime: '3h 30m'
    }
  },
  {
    id: 'sword-model',
    title: 'Obsidian Fire Sword CGI',
    category: 'texturing',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzltYkHnrAlOlZWGD6HtnBxYsz2q8qugTz3C7BMjyz-xU8jGIgL6ilkAB7uRVXFsRX6VRCuTdg92kQrtyPSoM1LgeC3NTgGdjbviwscTd3XLMoqRN-WkDxYkFQzE1A33oyaNymRHcphnwobqfSDRa_hsU4yMfHJzw1b6GFNEzQK2si5lrw6f_-t0u1bQQfzPkBk70iivLOcqoaMfnMdJCcHD1ODL5JV9TLNk9c1SlWfirVt04FAJ-Ji_N7FfZlxiHaqI2U4YxUtvQ=s0',
    description: 'From flat design concepts to photorealistic low-poly meshes. Built using precise Adobe Photoshop layout guides and high-to-low poly Substance backing pipelines.',
    software: ['Photoshop', 'Substance Painter', 'Blender'],
    specs: {
      triangles: '12,500 tris',
      vertices: '6,400 verts',
      textures: '1x 4K PBR Set',
      renderTime: '55m'
    }
  },
  {
    id: 'abandoned-hall',
    title: 'The Industrial Backrooms corridor',
    category: 'rendering',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxXP0ZGhCfagcCQbzk--TDfALFQng84N7DqUOju8iD2wySwuMqdgzxNvCxV8NWqan_-_XygrLYhrPw1N73xC3AjOHJ8hkYW5K-eOllTlCywYgNMP06RYphYmSBeNcPCyEhuY2W0XAgq2E6SeKVGyJphjTZ_tNrxl9Qrtgxy7KtcHaBts3Pugko3x0UTDAcaHpNSUfDiNLAaHIql-12wcePvxv-qVItGYNq0nufki7vXEUx8Ddg56WUhgmntl2JFIuzhmJstFY1LyQ=s0',
    description: 'Moody and eerie industrial basement rendering with volumetric dust particles, concrete aging, wet metallic reflections, and strong volumetric contrast.',
    software: ['V-Ray', 'Blender', 'Photoshop'],
    specs: {
      triangles: '1,890,000 tris',
      vertices: '980,000 verts',
      textures: '6x 4K PBR Sets',
      renderTime: '5h 12m'
    }
  }
];

export const SPECS: SpecItem[] = [
  { name: 'Blender 3D Modeling', level: 95, category: 'software', iconName: 'Cuboid', details: 'Hard surface CAD-precision modeling, custom geometry shaders, high-poly sculpting, retopology.' },
  { name: 'Substance Painter', level: 90, category: 'software', iconName: 'Layers', details: 'Procedural material generation, multi-channel micro-surface texturing, custom smart materials.' },
  { name: 'V-Ray Rendering', level: 88, category: 'software', iconName: 'Eye', details: 'Global illumination, raytraced reflection/refraction, custom atmospheric fog, interior visualization.' },
  { name: 'Adobe Photoshop', level: 85, category: 'software', iconName: 'Cpu', details: 'Cinematic color grading, multipass EXR compositing, post-processing texture weathering.' },
  { name: 'Inkscape', level: 85, category: 'software', iconName: 'Layers', details: 'Vector decal artwork, high-resolution SVG texture patterns, and graphic projection layouts.' },
  { name: 'Adobe Illustrator', level: 88, category: 'software', iconName: 'Layers', details: 'Industry-standard vector design for complex logo layouts, UI dashboards, and decal placement sets.' },
  { name: 'VS Code', level: 90, category: 'software', iconName: 'Cpu', details: 'Python automation scripts, customized shader development, and pipeline tooling integrations.' },
  { name: 'fSpy Perspective Matching', level: 92, category: 'software', iconName: 'Eye', details: 'Precise camera angle matching and focal length alignment from perspective reference photography.' },
  { name: 'CAD & Fusion 360', level: 84, category: 'software', iconName: 'Cuboid', details: 'Parametric solid-body engineering modeling, watertight joints, and mechanical STL asset export.' },
  { name: 'Bambu Studio', level: 94, category: 'software', iconName: 'HardDrive', details: 'Advanced slicer setup, multi-color physical material assignments, and printable STL file optimization.' }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Blockout & Proportions',
    description: 'Designing initial low-fidelity silhouettes to establish scale, ergonomic correctness, and composition guidelines.'
  },
  {
    number: '02',
    title: 'High-Poly Sculpting',
    description: 'Injecting micro-details, soft bevels, and physical creases into the model to simulate real-world physical structures.'
  },
  {
    number: '03',
    title: 'Low-Poly Retopology',
    description: 'Creating ultra-efficient quad flow to maximize game-engine performance while retaining sharp, beautiful silhouettes.'
  },
  {
    number: '04',
    title: 'PBR Material Baking',
    description: 'Transferring lighting normals, ambient occlusion, and curvature maps from high-poly models into low-poly layouts.'
  },
  {
    number: '05',
    title: 'UDIM Texturing',
    description: 'Weathering the asset with customized procedural layers in Substance Painter to capture convincing real-world age.'
  },
  {
    number: '06',
    title: 'Cinematic CGI Rendering',
    description: 'Setting up photographic cameras, HDRI studio lights, volumetric atmospheres, and final composite grading.'
  }
];
