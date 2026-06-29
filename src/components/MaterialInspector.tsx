import React, { useState } from 'react';
import { Layers, Sliders, Info, HardDrive } from 'lucide-react';

interface MaterialChannel {
  id: string;
  name: string;
  label: string;
  color: string;
  description: string;
  techTerm: string;
  filterStyle: React.CSSProperties;
}

export default function MaterialInspector() {
  const [activeChannel, setActiveChannel] = useState('composite');

  const channels: MaterialChannel[] = [
    {
      id: 'composite',
      name: 'Final Composite',
      label: 'Full PBR Render',
      color: 'bg-industrial-orange',
      techTerm: 'Combined Diffuse, Specular & Normal passes',
      description: 'The final camera render in Blender with full raytraced bounces, refraction, and lighting paths calculated in V-Ray.',
      filterStyle: { filter: 'none' }
    },
    {
      id: 'albedo',
      name: 'Albedo Pass',
      label: 'Base Color',
      color: 'bg-yellow-600',
      techTerm: 'Raw diffuse color channels, no shadows or highlights',
      description: 'Raw pigment data. Pure brass alloy color, terracotta coatings, and dark oxidized rust patches, completely devoid of highlights or lighting influence.',
      filterStyle: { filter: 'saturate(1.2) contrast(1.1) brightness(0.95)' }
    },
    {
      id: 'metallic',
      name: 'Metallic Mask',
      label: 'Specular Reflectance',
      color: 'bg-slate-400',
      techTerm: 'Binary metallic classification mask (0.0 - 1.0)',
      description: 'Determines which surfaces conduct light (metals) vs refract it (dielectrics). White indicates raw brass; black represents rust, dust, and oxide layers.',
      filterStyle: { filter: 'contrast(300%) grayscale(100%) brightness(0.8)' }
    },
    {
      id: 'roughness',
      name: 'Roughness Map',
      label: 'Micro-surface Finish',
      color: 'bg-slate-600',
      techTerm: 'Specular scattering coefficient map',
      description: 'Controls the glossiness of highlights. Dark areas (valves) reflect perfectly sharp lights. Light grey areas (rusted joints) scatter light broadly.',
      filterStyle: { filter: 'grayscale(100%) invert(1) contrast(150%)' }
    },
    {
      id: 'normal',
      name: 'Normal Vector Map',
      label: 'Tessellation Vectors',
      color: 'bg-indigo-500',
      techTerm: 'RGB Tangent Space normal vector calculation',
      description: 'Simulates micro-geometric dents, scratches, and manufacturing stamps without adding polygons. RGB vectors match XYZ surface coordinates.',
      filterStyle: { 
        filter: 'hue-rotate(180deg) saturate(2) contrast(1.3)',
        mixBlendMode: 'difference'
      }
    }
  ];

  const activeData = channels.find((c) => c.id === activeChannel) || channels[0];

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Visual Canvas */}
      <div className="flex-1 flex flex-col justify-between min-h-[300px] lg:min-h-[400px] relative rounded-xl overflow-hidden bg-black/60 border border-white/5 group">
        {/* Background Material Graphic */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrRClkpQL6ZnNno5fU_gxAl-c0gOUxZzn_2ZqCHNXbVlNZZO1jdmv0bjhUt08HI3GrjxeXcA2OLwVjNgbNwSLa4sXO8BuYguBoBcq-K1e5GVYwXyMPDZMhznNF953Bro2Rf0l0IWHAFJ2VLNI8GLnXMj2LcSTZWTBA53ktGNT0IBy9RsVDvkmAleg0tM_qHPcL4QO9tijsCS7mtXvJxac8XcCfjxHuQeud-8skT26NWHW_wPje5uSEmuPHfA8c_lLNlEg1npgl9Mo"
            alt="Brass Valves Material Close-up"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            style={activeData.filterStyle}
          />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        </div>

        {/* Badge Indicator */}
        <div className="relative z-10 m-4 flex justify-between items-start">
          <span className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-mono border border-white/10 text-on-surface flex items-center gap-1.5 shadow-md">
            <span className={`w-2 h-2 rounded-full ${activeData.color}`}></span>
            CHANNEL: {activeData.name.toUpperCase()}
          </span>
          <span className="bg-black/85 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-printer-green border border-white/10 uppercase tracking-widest shadow-md">
            SUBSTANCE 3D
          </span>
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="relative z-10 m-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-2xl">
          <div className="flex items-center gap-2 mb-1">
            <Sliders className="w-4 h-4 text-industrial-orange" />
            <span className="font-mono text-xs font-bold text-on-surface">PBR Shader Pipeline</span>
          </div>
          <p className="font-mono text-[10px] text-on-surface-variant line-clamp-1">
            Map Parameter: <span className="text-white">{activeData.techTerm}</span>
          </p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full lg:w-96 flex flex-col justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-industrial-orange" />
            <span className="font-mono text-xs text-industrial-orange uppercase tracking-widest">
              Substance Painter Channels
            </span>
          </div>
          <h3 className="text-2xl font-black font-sans text-on-surface tracking-tight">
            PBR Texture Inspector
          </h3>
          <p className="text-sm text-on-surface-variant mt-2">
            Professional assets are built from stacked physical parameters. Click each layer to inspect its specific micro-detail contributions.
          </p>
        </div>

        {/* Tabs Grid */}
        <div className="flex flex-col gap-2.5 my-1">
          {channels.map((chan) => (
            <button
              key={chan.id}
              onClick={() => setActiveChannel(chan.id)}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border font-mono text-xs transition-all duration-300 text-left cursor-pointer ${
                activeChannel === chan.id
                  ? 'bg-white/[0.08] border-industrial-orange text-white shadow-[0_0_15px_rgba(204,120,92,0.15)]'
                  : 'bg-white/[0.02] border-white/5 text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${chan.color}`}></span>
                <div>
                  <div className="font-bold">{chan.name}</div>
                  <div className="text-[10px] opacity-70 font-normal">{chan.label}</div>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant/60 font-mono">
                {chan.id === 'composite' ? 'PASS 01' : `MAP_0${channels.indexOf(chan)}`}
              </span>
            </button>
          ))}
        </div>

        {/* Description Panel */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-start">
          <Info className="w-5 h-5 text-industrial-orange flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-mono text-xs text-white font-semibold">Scientific Context</h4>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              {activeData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
