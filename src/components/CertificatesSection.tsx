import React, { useState, useEffect } from "react";
import { Award, ExternalLink, X, ChevronDown, ChevronUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificateCategories: {
    [key: string]: {
        description: string;
        images: string[];
    };
} = {
    UI: {
        description:
            "Comprehensive training on UI/UX design, including wireframing, prototyping, and usability testing.",
        images: [
            "/Certi/UI/Certi1.png",
            "/Certi/UI/Certi2.png",
            "/Certi/UI/Certi3.png",
            "/Certi/UI/Certi4.png",
            "/Certi/UI/Certi5.png",
        ],
    },
    Cyber: {
        description:
            "In-depth courses on cybersecurity fundamentals, encryption, ethical hacking, and secure systems.",
        images: ["/Certi/Cyber/Certi1.png"],
    },
    Project_Management: {
        description:
            "Comprehensive training on project management methodologies, tools, and best practices.",
        images: ["/Certi/Project_Management/Certi1.png"],
    },
    Smart_India_Hackathon: {
        description:
            "Participated in the Smart India Hackathon 2024, a nationwide initiative to provide students with a platform to solve real-world problems.",
        images: ["/Certi/Hackthon/SmartIndia.png"],
    },
    SMACKATHON_24Hrs_Hackathon: {
        description:
            "Participated in the SMACKATHON 24Hrs Hackathon, a 24-hour coding challenge to develop innovative solutions.",
        images: ["/Certi/Hackthon/SMACKATHON.png"],
    },
    GFG_ICPC: {
        description:
            "Participated in the GFG ICPC 2.0, a competitive programming event focused on algorithmic challenges.",
        images: ["/Certi/Hackthon/GFG.png"],
    },
    PPT: {
        description:
            "Scored 2nd Rank in the PPT competition organized by KAMLA NEHRU MAHAVIDYALAYA, Nagpur.",
        images: ["/Certi/Hackthon/PPPT.png"],
    },
    JAVA: {
        description:
            "Hands-on course covering core Java concepts, object-oriented programming, and application development.",
        images: ["/Certi/Tech/java.png"],
    },
    Frontend: {
        description:
            "Hands-on course covering HTML, CSS, JavaScript, React, and responsive web design.",
        images: ["/Certi/Tech/Frontend.png"],
    },
};

const certificatesData = [
    {
        id: 1,
        title: "UI/UX Design Certification",
        issuer: "Google, Coursera",
        date: "Dec 2024",
        description:
            "UI/UX foundational training including prototyping and usability.",
        category: "UI",
        color: "from-cyan-400 to-blue-500"
    },
    {
        id: 2,
        title: "Cybersecurity Certification",
        issuer: "Microsoft, Coursera",
        date: "Mar 2025",
        description: "Network security, encryption, and ethical hacking.",
        category: "Cyber",
        color: "from-green-400 to-emerald-500"
    },
    {
        id: 3,
        title: "Project Management",
        issuer: "Google, Coursera",
        date: "Mar 2025",
        description: "Project management principles and practices.",
        category: "Project_Management",
        color: "from-purple-400 to-pink-500"
    },
    {
        id: 4,
        title: "SMART INDIA HACKATHON 2024",
        issuer: "Ramdeobaba College",
        date: "Sep 2024",
        description:
            "Participated in the Smart India Hackathon 2024, a nationwide initiative to provide students with a platform to solve real-world problems.",
        category: "Smart_India_Hackathon",
        color: "from-orange-400 to-red-500"
    },
    {
        id: 5,
        title: "SMACKATHON 24Hrs Hackathon",
        issuer: "COJAG, YCCE",
        date: "Aug 2024",
        description:
            "Participated in the SMACKATHON 24Hrs Hackathon, a 24-hour coding challenge to develop innovative solutions.",
        category: "SMACKATHON_24Hrs_Hackathon",
        color: "from-yellow-400 to-amber-500"
    },
    {
        id: 6,
        title: "GFG ICPC 2.0",
        issuer: "GeeksforGeeks",
        date: "Feb 2025",
        description:
            "Certification for Achievements in the GFG ICPC 2.0 competitive programming event.",
        category: "GFG_ICPC",
        color: "from-cyan-400 to-purple-400"
    },
    {
        id: 7,
        title: "PPT Completion Certificate",
        issuer: "KAMLA NEHRU MAHAVIDYALAYA",
        date: "July 2022",
        description:
            "Scored 2nd Rank in the PPT competition organized by KAMLA NEHRU MAHAVIDYALAYA, Nagpur.",
        category: "PPT",
        color: "from-green-400 to-blue-400"
    },
    {
        id: 8,
        title: "Java Programming Certification",
        issuer: "Disha Computer Institute",
        date: "Dec 2023",
        description: "Hands-on course covering core Java concepts.",
        category: "JAVA",
        color: "from-red-400 to-orange-400"
    },
    {
        id: 9,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "Nov 2023",
        description:
            "Training on HTML, CSS, JavaScript, React, and responsive web design.",
        category: "Frontend",
        color: "from-purple-400 to-cyan-400"
    },
];

const CertificatesSection: React.FC = () => {
    const [viewMore, setViewMore] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleView = (category: string) => {
        setActiveCategory(category);
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleClose = () => {
        setActiveCategory(null);
    };

    const certificates = viewMore
        ? certificatesData
        : certificatesData.slice(0, 6);

    return (
        <section className="py-16 w-full relative overflow-hidden" id="certificates">
            {/* Background Elements - Same as Skills Section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 
                        data-scroll
                        data-scroll-speed="0.5"
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Certificates</span>
                    </h2>
                    <p 
                        data-scroll
                        data-scroll-speed="0.3"
                        className="text-white/70 text-lg"
                    >
                        Professional certifications and courses I've completed
                    </p>
                </div>

                {/* Certificates Grid */}
                <div 
                    data-scroll
                    data-scroll-speed="0.8"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
                >
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="relative group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col"
                        >
                            {/* Certificate Icon */}
                            <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                                <Award className="w-5 h-5 text-white" />
                            </div>

                            {/* Hover Gradient Background */}
                            <div 
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none `}
                            />

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-white mb-2 pr-8">
                                {cert.title}
                            </h3>
                            
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-cyan-300 font-medium text-sm">
                                    {cert.issuer}
                                </span>
                                <span className="text-white/60 text-xs">
                                    {cert.date}
                                </span>
                            </div>
                            
                            <p className="text-white/80 text-sm mb-4 flex-grow leading-relaxed">
                                {cert.description}
                            </p>
                            
                            <button
                                onClick={() => handleView(cert.category)}
                                className="relative z-20 cursor-pointer flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-auto group/view"
                            >
                                <span className="text-sm font-medium">View Certificate</span>
                                <ExternalLink size={14} className="group-hover/view:translate-x-0.5 transition-transform duration-300" />
                            </button>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                                <div className="w-full h-full bg-cosmic-dark rounded-xl" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div 
                    data-scroll
                    data-scroll-speed="0.3"
                    className="text-center"
                >
                    <button
                        onClick={() => setViewMore(!viewMore)}
                        className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105 cursor-pointer"
                    >
                        <span>{viewMore ? "Show Less" : "View More Certificates"}</span>
                        {viewMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                </div>
            </div>

            {/* Modal */}
            {activeCategory && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={handleClose}>
                    <div 
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-white text-2xl font-bold">
                                {activeCategory.replace(/_/g, ' ')} Certificates
                            </h2>
                            <button
                                onClick={handleClose}
                                className="cursor-pointer text-white/70 hover:text-white transition-colors duration-300 p-1"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="p-6">
                            <p className="text-white/80 mb-6 text-center">
                                {certificateCategories[activeCategory].description}
                            </p>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ 
                                    clickable: true,
                                    bulletClass: 'swiper-pagination-bullet bg-white/30',
                                    bulletActiveClass: 'swiper-pagination-bullet-active bg-cyan-400'
                                }}
                                autoplay={{ delay: 4000 }}
                                className="rounded-lg overflow-hidden"
                            >
                                {certificateCategories[activeCategory].images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="flex items-center justify-center bg-black/20 rounded-lg p-4">
                                            <img
                                                src={img}
                                                alt={`Certificate ${idx + 1}`}
                                                className="rounded-lg max-h-[500px] w-auto max-w-full"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles */}
            <style>{`
                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                }
                .swiper-button-next,
                .swiper-button-prev,
                .swiper-pagination-bullet {
                    cursor: pointer !important;
                }
            `}</style>
        </section>
    );
};

export default CertificatesSection;