// Import technology icons (PNG format)
// Icons should be placed in ./assets/icons/ folder
// Recommended sources: Simple Icons (simpleicons.org), official brand guidelines, or DevIcons
import pythonIcon from './assets/icons/python.png';
import cppIcon from './assets/icons/cpp.png';
import dartIcon from './assets/icons/dart.png';
import flutterIcon from './assets/icons/flutter.png';
import swiftIcon from './assets/icons/swift.png';
import kotlinIcon from './assets/icons/kotlin.png';
import unityIcon from './assets/icons/unity.png';
import iosIcon from './assets/icons/ios.png';
import androidIcon from './assets/icons/android.png';
import metaXRIcon from './assets/icons/meta-xr.png';
import latexIcon from './assets/icons/latex.png';
import nistIcon from './assets/icons/nist.png';
import tensorflowIcon from './assets/icons/tensorflow.png';
import mediapipeIcon from './assets/icons/mediapipe.png';
import arduinoIcon from './assets/icons/arduino.png';
import fusion360Icon from './assets/icons/fusion360.png';

const tools = [
  { name: 'C++', icon: cppIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'MediaPipe', icon: mediapipeIcon },
  { name: 'TensorFlow', icon: tensorflowIcon },
  { name: 'Dart', icon: dartIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'Swift', icon: swiftIcon },
  { name: 'Kotlin', icon: kotlinIcon },
  { name: 'Meta XR', icon: metaXRIcon },
  { name: 'Unity', icon: unityIcon },
  { name: 'iOS SDK', icon: iosIcon },
  { name: 'Android SDK', icon: androidIcon },
  { name: 'LaTeX', icon: latexIcon },
  { name: 'Cryptography Testing', icon: nistIcon },
  { name: 'Arduino', icon: arduinoIcon },
  { name: 'Fusion360', icon: fusion360Icon },
  // TODO: Add Mathematica
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Column: About Me */}
          <div className="md:flex-1 md:basis-7/12 p-4">
            <h3 className="text-xl text-center font-semibold text-foreground mb-8">About Me</h3>

            <div className="space-y-4">
              <p className="text-base text-foreground px-4 mt-2">
                Hi! My name is Arav Chand, and I'm from Long Island, New York.
              </p>

              <p className="text-base text-foreground px-4 mt-2">
                I've ranked Top 3 worldwide in the <a href='https://drive.google.com/file/d/1x3mF2lxGMngrjKraMY7rQbHOMSEcd-jw/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Uber Global Hackathon 2023</a>  and
                in the <a href='https://drive.google.com/file/d/1zzPRJ4KnxeF1bEvX-5mfUcCyl8ILx20_/view?usp=sharing' target='_blank' rel='noopener noreferrer'>MIT-NASA ZeroRobotics Lost in Space Competition 2025</a>.
              </p>

              <p className="text-base text-foreground px-4 mt-2">
                My <a href="https://arxiv.org/abs/2508.18461" target="_blank" rel="noopener noreferrer">published</a> mathematics and cryptography research has won 2x at
                the <a href="https://isef.net/profile/AravChand" target="_blank" rel="noopener noreferrer">2024 and 2025 International Science and Engineering Fair (ISEF)</a>, 
                and earned <a href="https://drive.google.com/file/d/1YZnkE6b8YTt8yzOzUYJsiSrqGz9VkDq-/view?usp=sharing" target="_blank" rel="noopener noreferrer">global recognition from the National Security Agency (NSA)</a>. 
              </p>


              <p className="text-base text-foreground px-4 mt-2">
                Beyond <a href='https://drive.google.com/file/d/1Kh6cl4cxxyDRBLC3KS_EZHkAyG4v6KGg/view?usp=sharing' target='_blank' rel='noopener noreferrer'>working with the New York State Senator Office</a> to promote proactive safety through
                my <a href="#projects">published anti-bullying app <em>Halt Hate</em></a> and earning a Senator Citation for Civic Tech, 
                I was recently honored as the <a href="https://www.pointsoflight.org/awards/this-volunteer-wants-to-de-bug-food-waste/" target="_blank" rel="noopener noreferrer">Daily Point of Light #8206 National Service Award 
                recipient</a> for my work in <a href="#social">Sweet Surplus</a>, a food-rescue initiative backed by logistics networks 
                and community partnerships. 
              </p>

              <p className="text-base text-foreground px-4 mt-2">
                Additionally, I've honed my creative problem solving through International Olympiads:
                <ul className="list-disc list-inside">
                  <li>ACSL 1st in World Individual (<b>1st/7,000+ global finalists</b>) American Computer Science League All-Stars Finals, Senior Division; 1x Gold, 2x Silver</li>
                  <li>USA Computing Olympiad Platinum (<b>USACO Top ~250/10,000+ worldwide</b>)</li>
                  <li>USA Physics Olympiad Semifinalist (<b>USAPhO Top 100/6,000+ nationwide</b>)</li>
                  <li>4x American Invitational Mathematics Examination (AIME) Qualifier with Distinction/Distinguished Honor Roll (<b>Top 1% of 60,000+</b>)</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Right Column: Tools and Technology */}
          <div className="md:flex-1 md:basis-5/12 flex flex-col justify-center items-center my-2 py-6">
            <h2 className="text-xl font-bold text-foreground p-4 mb-1">Tools and Technology</h2>
            <p className="text-sm text-foreground px-4 mb-4 italic">
              Use Cases: app development, game development, cryptographic security, virtual reality, human-computer interaction, space robotics, 3D design and manufacturing.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-4 md:gap-8 gap-2 mt-4">
              {tools.map((tool, index) => (
                <div key={tool.name} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-card/50 flex items-center justify-center transition-all duration-300 hover:scale-150 group p-2">
                    <img 
                      src={tool.icon} 
                      alt={`${tool.name} icon`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback if icon is missing
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-foreground text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
