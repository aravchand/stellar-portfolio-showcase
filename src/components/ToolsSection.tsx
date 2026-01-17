const tools = [
  { name: 'PyTorch', color: '#EE4C2C', icon: '🔥' },
  { name: 'TensorFlow', color: '#FF6F00', icon: '🧠' },
  { name: 'Swift', color: '#F05138', icon: '🐦' },
  { name: 'Fusion 360', color: '#FF6B35', icon: '⚙️' },
  { name: 'Excel', color: '#217346', icon: '📊' },
  { name: 'Adobe Premiere', color: '#9999FF', icon: '🎬' },
  { name: 'Arduino', color: '#00979D', icon: '🔌' },
  { name: 'Raspberry Pi', color: '#C51A4A', icon: '🍓' },
];

const ToolsSection = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-8 text-center">Tools and Technology</h2>

      <div className="grid grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center gap-2 p-3"
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${tool.color}20` }}
            >
              {tool.icon}
            </div>
            <span className="text-xs text-muted-foreground text-center leading-tight">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
