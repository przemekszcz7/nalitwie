import { useState, useEffect } from 'react';

// Real Estate Offer Interface
interface RealEstateOffer {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Offers Data
  const offers: RealEstateOffer[] = [
    {
      id: 'dzialki',
      category: 'DZIAŁKI BUDOWLANE',
      title: 'Działki budowlane nad jeziorami i w miastach',
      description: 'Zjawiskowe działki o przeznaczeniu mieszkaniowym na Litwie, w tym prestiżowe lokalizacje blisko jezior oraz na obrzeżach Wilna. Idealna lokata kapitału.',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
    },
    {
      id: 'domy',
      category: 'DOMY I WILLE',
      title: 'Luksusowe domy w otoczeniu natury',
      description: 'Rezydencje całoroczne oraz prestiżowe domy jednorodzinne wykończone w najwyższym europejskim standardzie. Spokojne sąsiedztwo przy granicy z Polską.',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'
    },
    {
      id: 'mieszkania',
      category: 'MIESZKANIA',
      title: 'Prestiżowe apartamenty w Wilnie',
      description: 'Mieszkania inwestycyjne w historycznym centrum oraz nowoczesnych dzielnicach biznesowych. Doskonała rentowność i stabilny wzrost wartości.',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    },
    {
      id: 'grunty',
      category: 'GRUNTY ROLNE',
      title: 'Inwestycyjne grunty rolne i leśne',
      description: 'Rozległe areały o ogromnym potencjale rozwoju. Przeprowadzamy przez całą procedurę nabycia ziemi rolnej lub gruntów komercyjnych.',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
    }
  ];

  // Handle transparent to white nav change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle choosing custom offer -> scroll to contact section
  const handleInquireAbout = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#b8973a] selection:text-white font-sans text-[#0d1f3c] bg-white">
      
      {/* 2. NAVIGATION BAR */}
      <nav 
        id="main-nav" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white py-4 border-b border-[#0d1f3c]/10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]' 
            : 'bg-transparent py-6 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <img 
              src="https://i.ibb.co/VcNh3YV0/649126417-10225540017167304-7178704506848778146-n.jpg" 
              alt="Logo" 
              className={`h-10 object-cover object-center transition-all duration-500 ease-out ${
                isScrolled 
                  ? 'opacity-100 w-10 scale-100 mr-1' 
                  : 'opacity-0 w-0 scale-90 pointer-events-none mr-0'
              }`}
              loading="lazy"
            />
            <span className={`font-serif text-lg md:text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-[#0d1f3c]' : 'text-white'
            }`}>
              Nieruchomości na Litwie
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <a 
              href="#oferta" 
              className={`font-sans tracking-[0.18em] text-xs font-medium uppercase transition-colors duration-300 hover:text-[#b8973a] ${
                isScrolled ? 'text-[#0d1f3c]' : 'text-white'
              }`}
            >
              OFERTA
            </a>
            <a 
              href="#litwa" 
              className={`font-sans tracking-[0.18em] text-xs font-medium uppercase transition-colors duration-300 hover:text-[#b8973a] ${
                isScrolled ? 'text-[#0d1f3c]' : 'text-white'
              }`}
            >
              LITWA
            </a>
            <a 
              href="#o-nas" 
              className={`font-sans tracking-[0.18em] text-xs font-medium uppercase transition-colors duration-300 hover:text-[#b8973a] ${
                isScrolled ? 'text-[#0d1f3c]' : 'text-white'
              }`}
            >
              O NAS
            </a>
            <a 
              href="#kontakt" 
              className={`font-sans tracking-[0.18em] text-xs font-medium uppercase transition-colors duration-300 hover:text-[#b8973a] ${
                isScrolled ? 'text-[#0d1f3c]' : 'text-white'
              }`}
            >
              KONTAKT
            </a>
          </div>

          {/* Phone Number & FB Icon */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:663201446" 
              className="font-sans font-medium text-sm tracking-wide text-[#b8973a] hover:opacity-80 transition-opacity flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.54 2.21a1 1 0 01-.24.97l-2.22 2.22a15.916 15.916 0 006.56 6.56l2.22-2.22a1 1 0 01.97-.24l2.21.54a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              663 201 446
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61580790354480" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-[#0d1f3c] hover:text-[#b8973a]' : 'text-white hover:text-[#b8973a]'
              }`}
              title="Odwiedź nasz profil na Facebooku"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <a 
              href="tel:663201446" 
              className={`font-sans tracking-wide text-xs font-semibold ${isScrolled ? 'text-[#b8973a]' : 'text-white'}`}
            >
              663 201 446
            </a>
            <button 
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-200 ${
                isScrolled ? 'text-[#0d1f3c]' : 'text-white'
              }`}
              aria-label="Otwórz menu mobilne"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-overlay" 
        className={`fixed inset-0 z-40 bg-[#0d1f3c] transition-all duration-500 flex flex-col justify-between px-8 py-24 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center mt-8">
          <a 
            href="#oferta" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl tracking-[0.2em] text-white uppercase font-light hover:text-[#b8973a] transition-colors"
          >
            OFERTA
          </a>
          <a 
            href="#litwa" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl tracking-[0.2em] text-white uppercase font-light hover:text-[#b8973a] transition-colors"
          >
            LITWA
          </a>
          <a 
            href="#o-nas" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl tracking-[0.2em] text-white uppercase font-light hover:text-[#b8973a] transition-colors"
          >
            O NAS
          </a>
          <a 
            href="#kontakt" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-xl tracking-[0.2em] text-white uppercase font-light hover:text-[#b8973a] transition-colors"
          >
            KONTAKT
          </a>
        </div>

        <div className="text-center flex flex-col items-center gap-6">
          <a 
            href="tel:663201446" 
            className="font-serif text-2xl text-[#b8973a] tracking-wider transition-colors hover:text-white"
          >
            663 201 446
          </a>
          <div className="flex items-center gap-6 z-50">
            <a 
              href="https://www.facebook.com/profile.php?id=61580790354480" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#b8973a] transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
              <span className="font-sans tracking-widest text-xs">FACEBOOK</span>
            </a>
          </div>
        </div>
      </div>


      {/* 3. HERO SECTION */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center bg-[#0d1f3c] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 31, 60, 0.55), rgba(13, 31, 60, 0.25)), url('https://i.ibb.co/tw3kRm8L/668962268-10225830441107721-5072665462681219135-n.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 animate-fade-up">
          {/* Accent Gold Rule */}
          <div className="mx-auto w-20 h-[1px] bg-[#b8973a] mb-8" />
          
          <h1 className="font-serif font-light text-white text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none mb-6">
            Nieruchomości na Litwie
          </h1>
          
          <p className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.2em] text-white uppercase mb-12">
            Działki • Domy • Mieszkania • Grunty
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a 
              href="#oferta" 
              className="w-full sm:w-auto px-10 py-4 bg-[#b8973a] text-white font-sans text-xs tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-[#0d1f3c] transition-all duration-300 pointer-events-auto"
            >
              ZOBACZ OFERTĘ
            </a>
            <a 
              href="tel:663201446" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/60 font-sans text-xs tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-[#0d1f3c] hover:border-white transition-all duration-300"
            >
              663 201 446
            </a>
          </div>
        </div>
      </section>


      {/* 4. OFFER SECTION ("Oferta") */}
      <section id="oferta" className="py-24 md:py-32 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="reveal flex flex-col mb-16 md:mb-24">
            <div className="w-12 h-[1.5px] bg-[#b8973a] mb-4" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#b8973a] mb-2">
              OFERTA
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0d1f3c] leading-tight">
              Co oferujemy
            </h2>
          </div>

          {/* Cards Grid: 2x2 with absolutely square corners and navy overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {offers.map((offer, idx) => (
              <div 
                key={offer.id} 
                id={`offer-card-${offer.id}`} 
                className="reveal flex flex-col select-none group border-0 bg-transparent"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Square Image container with scaling zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1f3c]">
                  <img 
                    src={offer.imageUrl} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-104 transition-transform duration-700 ease-out brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
                
                {/* Content Details in deep Navy Background */}
                <div className="bg-[#0d1f3c] p-8 md:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="block font-sans text-[11px] font-medium text-[#b8973a] tracking-[0.2em] uppercase mb-3">
                      {offer.category}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-white mb-4 leading-snug">
                      {offer.title}
                    </h3>
                    <p className="font-sans text-sm font-light text-white/80 leading-relaxed mb-6">
                      {offer.description}
                    </p>
                  </div>
                  
                  <div>
                    <button 
                      onClick={handleInquireAbout}
                      className="inline-block text-[#b8973a] font-sans text-xs tracking-wider uppercase font-medium group/btn cursor-pointer py-1"
                    >
                      Zapytaj o ofertę 
                      <span className="inline-block transform translate-x-1 group-hover/btn:translate-x-2 transition-transform duration-300 ml-1">
                        —&gt;
                      </span>
                      <div className="h-[1px] w-full bg-[#b8973a] mt-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. WHY LITHUANIA SECTION ("Dlaczego Litwa?") */}
      <section id="litwa" className="py-24 md:py-32 bg-[#f7f5f1] px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left 55% Column Text Info */}
            <div className="reveal lg:col-span-7 flex flex-col justify-center py-4">
              <div className="w-12 h-[1.5px] bg-[#b8973a] mb-4" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#b8973a] mb-2">
                DLACZEGO LITWA?
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0d1f3c] mb-12 leading-tight">
                Kraj możliwości
              </h2>

              {/* Benefit lines with elegant gold left lines */}
              <div className="space-y-6">
                
                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Atrakcyjne warunki cenowe
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Ceny nieruchomości są wciąż znacznie niższe niż w Polsce, co czyni rynek litewski niesamowitą okazją inwestycyjną.
                  </p>
                </div>

                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Bezpieczeństwo i stabilność prawna
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Jako członek Unii Europejskiej, strefy euro oraz NATO, Litwa gwarantuje stabilne prawo własności i pełną ochronę inwestorów.
                  </p>
                </div>

                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Bezproblemowa uproszczona procedura
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Prosta i przejrzysta procedura zakupu dla obywateli Polski. Zakup nie wymaga specjalnych pozwoleń od władz.
                  </p>
                </div>

                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Rosnący wzrost wartości kapitału
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Dynamicznie rozwijająca się litewska gospodarka napędza nieprzerwany, konsekwentny wzrost cen ziemi i budynków.
                  </p>
                </div>

                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Bliskość geograficzna i relacyjna
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Brak barier odległościowych — zaledwie kilka godzin spokojnej jazdy od granic Polski. Idealny wybór na drugi dom.
                  </p>
                </div>

                <div className="pl-6 border-l-[3px] border-[#b8973a] py-1">
                  <h4 className="font-serif text-lg font-normal text-[#0d1f3c] mb-1">
                    Dzika przyroda i urokliwy spokój
                  </h4>
                  <p className="font-sans text-sm font-light text-[#0d1f3c]/70 leading-relaxed">
                    Litwa to kraj czystych jezior, dziewiczych borów i unikalnego sielskiego spokoju sprzyjającego rekreacji.
                  </p>
                </div>

              </div>
            </div>

            {/* Right 45% Column Decorative Vertical Image */}
            <div className="reveal lg:col-span-5 relative min-h-[400px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600" 
                alt="Litewska krajobraz" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto border border-[#b8973a]/20"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* 6. ABOUT SECTION ("O nas") */}
      <section id="o-nas" className="py-24 md:py-32 bg-[#0d1f3c] text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            
            {/* Left large Cormorant heading */}
            <div className="reveal lg:col-span-5">
              <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#b8973a] mb-4">
                O NAS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white">
                Pomagamy Polakom znaleźć swoje miejsce na Litwie
              </h2>
            </div>

            {/* Right text details */}
            <div className="reveal lg:col-span-7 space-y-6 text-white/80 font-sans text-sm md:text-base font-light leading-relaxed">
              <p>
                Jesteśmy wyspecjalizowanym partnerem w znajdowaniu, wyborze oraz bezpiecznym przeprowadzaniu zakupów gruntów, domów i apartamentów na Litwie. Nasz w pełni polskojęzyczny zespół eliminuje bariery językowe, dostarczając bezprecedensowy komfort transakcji.
              </p>
              <p>
                Dzięki doskonałej, ugruntowanej znajomości litewskiego rynku, procedur prawno-notarialnych oraz lokalnych warunków zagospodarowania, chronimy interesy naszych klientów na każdym etapie — od pierwszej wizytacji po podpisanie aktu notarialnego.
              </p>
              <p>
                Nasz cel to transparentność i najwyższa profesjonalna kultura obsługi na rynkach zagranicznych. Doradzamy wyłącznie w oparciu o rzetelne, zweryfikowane analizy wartości nieruchomości i potencjału rozwoju otoczenia.
              </p>
            </div>

          </div>

          {/* Centered Golden Number Line Accent */}
          <div className="reveal pt-12 border-t border-[#b8973a]/30 text-center">
            <span className="block font-sans text-[11px] font-semibold text-[#b8973a] tracking-[0.25em] uppercase mb-4">
              DEDYKOWANA LINIA PREMIUM
            </span>
            <a 
              href="tel:663201446" 
              className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-[#b8973a] tracking-widest hover:text-white transition-colors duration-300"
            >
              663 201 446
            </a>
          </div>

        </div>
      </section>


      {/* 8. CONTACT SECTION ("Kontakt") */}
      <section id="kontakt" className="py-24 md:py-32 bg-white border-t border-[#0d1f3c]/5 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="reveal flex flex-col items-center mb-10">
            <div className="w-12 h-[1.5px] bg-[#b8973a] mb-4" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#b8973a] mb-2">
              KONTAKT
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0d1f3c]">
              Porozmawiajmy
            </h2>
          </div>

          <div className="reveal max-w-2xl mx-auto">
            <p className="font-sans text-base font-light text-[#0d1f3c]/80 leading-relaxed mb-12">
              Chcesz dowiedzieć się więcej o procedurach zakupu ziemi lub domów, czy zorganizować dojazd i bezpieczne obejrzenie nieruchomości? 
              Napisz do nas lub zadzwoń bezpośrednio.
            </p>

            {/* Direct Click to Call */}
            <div className="mb-12">
              <span className="block font-sans text-[11px] font-semibold tracking-widest text-[#b8973a] uppercase mb-3">
                ZADZWOŃ BEZPOŚREDNIO
              </span>
              <a 
                href="tel:663201446" 
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0d1f3c] hover:text-[#b8973a] transition-colors duration-300 block tracking-wider"
              >
                663 201 446
              </a>
              <span className="block font-sans text-xs text-[#0d1f3c]/60 mt-2">
                Odpowiadamy w języku polskim
              </span>
            </div>

            {/* Facebook CTA Square Button (Clean, Navy and White Icon, No Rounded Border) */}
            <div className="flex justify-center mt-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580790354480" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-[#0d1f3c] hover:bg-[#b8973a] text-white font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300"
                id="fb-contact-button"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
                Znajdź nas na Facebook
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* 9. FOOTER SECTION */}
      <footer id="main-footer" className="bg-[#0d1f3c] text-white pt-16 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Logo brand text centered */}
          <div className="flex flex-col items-center gap-3 mb-10 text-center">
            <span className="font-serif text-2xl font-semibold tracking-wider text-white">
              Nieruchomości na Litwie dla Polaków
            </span>
            <p className="font-sans text-[11px] tracking-widest uppercase text-[#b8973a] font-normal">
              Działki • Domy • Mieszkania • Grunty
            </p>
          </div>

          {/* Nav links row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10 text-center">
            <a href="#oferta" className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#b8973a] transition-colors duration-300">
              OFERTA
            </a>
            <a href="#litwa" className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#b8973a] transition-colors duration-300">
              LITWA
            </a>
            <a href="#o-nas" className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#b8973a] transition-colors duration-300">
              O NAS
            </a>
            <a href="#kontakt" className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#b8973a] transition-colors duration-300">
              KONTAKT
            </a>
          </div>

          {/* Contact and Facebook social hook */}
          <div className="flex flex-col items-center gap-4 mb-12 text-center text-sm font-sans font-light">
            <a href="tel:663201446" className="text-[#b8973a] font-medium text-base hover:opacity-80 transition-opacity flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.54 2.21a1 1 0 01-.24.97l-2.22 2.22a15.916 15.916 0 006.56 6.56l2.22-2.22a1 1 0 01.97-.24l2.21.54a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +48 663 201 446
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61580790354480" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-[#b8973a] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest mt-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
              Profil na Facebook
            </a>
          </div>

          {/* Thin Copyright Line */}
          <div className="w-full pt-8 border-t border-white/10 text-center">
            <p className="font-sans text-[11px] tracking-wider text-white/50 leading-relaxed">
              &copy; 2026 Nieruchomości na Litwie dla Polaków. Wszelkie prawa zastrzeżone.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
