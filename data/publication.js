const publicationsData = [
    {
        year: 2026,
        type: 'Conference',
        area: ['multimodal-ai-security', 'physical-sensing-security'],
        title: 'Caught on Camera: Toward Evaluating and Defending On-screen Deepfakes With Mobile and Wearable Camera Devices',
        authors: 'Shuhao Zhang, Pai Zheng, Yuanzhe Yang, Qinhong Jiang, Yan Long',
        venue: 'RAID 2026',
        ccf: 'CCF-B',
        acceptanceRate: 'Acceptance rate 19%',
        links: {}
    },
    {
        year: 2026,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'Injected and Leaked: Actively Inducing Side-Channel Leakage Using Electromagnetic Injection and Hardware Nonlinearity',
        authors: 'Haoran Yan, Ziyu Shao, Shuhao Zhang, Qinhong Jiang, Yan Long',
        venue: 'USENIX Security 2026',
        ccf: 'CCF-A',
        links: {
            pdf: 'files/usenix26-injecteave.pdf',
            website: 'https://injecteave.github.io/'
        },
        extraLinks: [
            { label: 'BibTeX', url: 'files/usenix26-injecteave-bibtex.txt' },
            { label: 'Website & Demo', url: 'https://injecteave.github.io/' }
        ]
    },
    {
        year: 2026,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'SoK: Security of Cyber-physical Systems Under Intentional Electromagnetic Interference Attacks',
        authors: 'Qinhong Jiang*, Yan Long*, Youqian Zhang*, Chen Yan, Xiaoyu Ji, Xiapu Luo, Kevin Fu, Jiannong Cao, Wenyuan Xu',
        venue: 'USENIX Security 2026',
        ccf: 'CCF-A',
        links: {
            pdf: 'files/usenix26-sok.pdf',
            website: 'https://iemi-research-database.github.io/'
        },
        extraLinks: [
            { label: 'BibTeX', url: 'files/usenix26-sok-bibtex.txt' },
            { label: 'Web Database', url: 'https://iemi-research-database.github.io/' }
        ]
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['software-ai-security'],
        title: 'Probing Challenges and Future Research of SBOM Generation for Medical Devices',
        authors: 'Hui Zhuang, Yan Long, Duyeong Kim, Jennifer R. Amos, Heejo Lee, Kevin Fu',
        venue: 'ACSAC HealthSec 2025',
        links: { pdf: 'files/healthsec25.pdf' }
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'RF-Eye-D: Probing Feasibility of CMOS Camera Watermarking with Radio-Frequency Injection',
        authors: 'Hui Zhuang, Yan Long, Kevin Fu',
        venue: 'RAID 2025',
        ccf: 'CCF-B',
        acceptanceRate: 'Acceptance rate 25%',
        links: {
            pdf: 'files/raid25-rfeyed.pdf',
            website: 'https://raid2025.github.io/program.html'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://raid2025.github.io/program.html' }
        ]
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['software-ai-security', 'physical-sensing-security'],
        title: 'ARMOUR US: Android Runtime Zero-permission Sensor Usage Monitoring from User Space',
        authors: 'Yan Long, Jiancong Cui, Yuqing Yang, Tobias Alam, Zhiqiang Lin, Kevin Fu',
        venue: 'ACM WiSec 2025',
        ccf: 'CCF-C',
        acceptanceRate: 'Acceptance rate 16%',
        links: {
            pdf: 'files/wisec25-armour.pdf',
            code: 'https://github.com/longyan97/ARMOUR'
        },
        extraLinks: [
            { label: 'Code & Dataset', url: 'https://github.com/longyan97/ARMOUR' }
        ]
    },
    {
        year: 2025,
        type: 'Journal',
        area: ['physical-sensing-security'],
        title: 'How Lasers Exploit Photoacoustic and Photoelectric Phenomena to Inject Signals into MEMS Microphones',
        authors: 'Benjamin Cyr, Vedant Sumaria, Yan Long, Srinivas Tadigadapa, Takeshi Sugawara, Kevin Fu',
        venue: 'Journal of Hardware and Systems Security 2025',
        links: {
            pdf: 'files/hass25.pdf',
            website: 'https://link.springer.com/article/10.1007/s41635-025-00159-9'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://link.springer.com/article/10.1007/s41635-025-00159-9' }
        ]
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'EyeHearYou: Probing Location Identification via Occluded Smartphone Cameras and Ultrasound',
        authors: 'Nina Shamsi, Yan Long, Kevin Fu',
        venue: 'IEEE HOST 2025',
        acceptanceRate: 'Acceptance rate 25%',
        links: {
            pdf: 'files/host25-eyehearyou.pdf',
            website: 'http://www.hostsymposium.org/program-html.php'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'http://www.hostsymposium.org/program-html.php' }
        ]
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['multimodal-ai-security', 'software-ai-security'],
        award: 'Distinguished Paper Award (top 3% of accepted papers)',
        title: 'From Virtual Touch to Tesla Command: Unlocking Unauthenticated Control Chains From Smart Glasses for Vehicle Takeover',
        authors: 'Xingli Zhang, Yazhou Tu, Yan Long, Liqun Shan, Mohamed A. Elsaadani, Kevin Fu, Zhiqiang Lin, Xiali Hei',
        venue: 'IEEE S&P 2024',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 17.8%',
        links: {
            pdf: 'files/oakland24.pdf',
            video: 'https://www.youtube.com/watch?v=5_NGOKfUolg',
            website: 'https://sp2024.ieee-security.org/awards.html'
        },
        extraLinks: [
            { label: 'Demo', url: 'https://www.youtube.com/playlist?list=PL5GANliQQ6TYZGFkMUU0kPJmOqSeDeeNy' },
            { label: 'Presentation', url: 'https://www.youtube.com/watch?v=5_NGOKfUolg' }
        ]
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['multimodal-ai-security', 'physical-sensing-security'],
        title: 'WIP: Threat Modeling Laser-Induced Acoustic Interference in Computer Vision-Assisted Vehicles',
        authors: 'Nina Shamsi, Kaeshav Chandrasekar, Yan Long, Keith Rebello, Christopher Limbach, Kevin Fu',
        venue: 'VehicleSec 2024',
        acceptanceRate: 'Acceptance rate 43%',
        links: { pdf: 'files/vehiclesec24.pdf' }
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['physical-sensing-security'],
        award: 'CSAW 2024 Applied Research Competition Award Top-10 Finalist',
        title: 'EM Eye: Characterizing Electromagnetic Side-channel Eavesdropping on Embedded Cameras',
        authors: 'Yan Long, Qinhong Jiang, Chen Yan, Tobias Alam, Xiaoyu Ji, Wenyuan Xu, Kevin Fu',
        venue: 'NDSS 2024',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 20%',
        links: {
            pdf: 'files/ndss24-emeye.pdf',
            website: 'https://emeyeattack.github.io/Website/',
            code: 'https://github.com/longyan97/EMEye_Tutorial',
            video: 'https://www.youtube.com/watch?v=5oR5GU6_xnM',
            slides: 'https://drive.google.com/file/d/1e64jcNHUZ7fU5lzA6538L1vFHilDqoMB/view?usp=sharing'
        },
        extraLinks: [
            { label: 'Website', url: 'https://emeyeattack.github.io/Website/' },
            { label: 'Code', url: 'https://github.com/longyan97/EMEye_Tutorial' },
            { label: 'Presentation', url: 'https://www.youtube.com/watch?v=5oR5GU6_xnM' },
            { label: 'Slides', url: 'https://drive.google.com/file/d/1e64jcNHUZ7fU5lzA6538L1vFHilDqoMB/view?usp=sharing' }
        ]
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'GhostType: The Limits of Using Contactless Electromagnetic Interference to Inject Phantom Keys into Analog Circuits of Keyboards',
        authors: 'Qinhong Jiang, Yanze Ren, Yan Long, Chen Yan, Yumai Sun, Xiaoyu Ji, Kevin Fu, Wenyuan Xu',
        venue: 'NDSS 2024',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 20%',
        links: {
            pdf: 'files/ndss24-ghosttype.pdf',
            website: 'https://sites.google.com/view/ghosttype-demo'
        },
        extraLinks: [
            { label: 'Website', url: 'https://sites.google.com/view/ghosttype-demo' }
        ]
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'Characterizing and Mitigating Touchtone Eavesdropping in Smartphone Motion Sensors',
        authors: 'Connor Bolton*, Yan Long*, Jun Han, Josiah Hester, Kevin Fu',
        venue: 'RAID 2023',
        ccf: 'CCF-B',
        acceptanceRate: 'Acceptance rate 23.5%',
        links: {
            pdf: 'files/raid23.pdf',
            website: 'https://dl.acm.org/doi/10.1145/3607199.3607203'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://dl.acm.org/doi/10.1145/3607199.3607203' }
        ]
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['multimodal-ai-security', 'physical-sensing-security'],
        title: 'Side Eye: Characterizing the Limits of POV Acoustic Eavesdropping from Smartphone Cameras with Rolling Shutters and Movable Lenses',
        authors: 'Yan Long, Pirouz Naghavi, Blas Kojusner, Kevin Butler, Sara Rampazzi, Kevin Fu',
        venue: 'IEEE S&P 2023',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 17%',
        links: {
            pdf: 'files/oakland23-sideeye.pdf',
            website: 'https://sideeyeattack.github.io/Website/',
            video: 'https://www.youtube.com/watch?v=W7ljxXxOem0'
        },
        extraLinks: [
            { label: 'Website', url: 'https://sideeyeattack.github.io/Website/' },
            { label: 'Paper Link', url: 'https://www.computer.org/csdl/proceedings-article/sp/2023/933600b032/1OXGSl6tea4' },
            { label: 'Presentation', url: 'https://www.youtube.com/watch?v=W7ljxXxOem0&list=PL0pRF4xvoD0kRsa5AeL9ncGw7CnLdIr7A&index=67' },
            { label: 'Media', url: '/media/2-SideEye' }
        ]
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['multimodal-ai-security', 'physical-sensing-security'],
        title: 'Private Eye: On the Limits of Textual Screen Peeking via Eyeglass Reflections in Video Conferencing',
        authors: 'Yan Long, Chen Yan, Shilin Xiao, Shivan Prasad, Wenyuan Xu, Kevin Fu',
        venue: 'IEEE S&P 2023',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 17%',
        links: {
            pdf: 'files/oakland23-privateeye.pdf',
            code: 'https://github.com/longyan97/EyeglassFilter',
            video: 'https://www.youtube.com/watch?v=1Cz_Zp-uEE8'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://www.computer.org/csdl/proceedings-article/sp/2023/933600a870/1OXGUMtuJLa' },
            { label: 'Presentation', url: 'https://www.youtube.com/watch?v=1Cz_Zp-uEE8&list=PL0pRF4xvoD0kRsa5AeL9ncGw7CnLdIr7A&index=114' },
            { label: 'Media', url: '/media/1-PrivateEye' },
            { label: 'Defense Tool', url: 'https://github.com/longyan97/EyeglassFilter' }
        ]
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'Space System Threat Models Must Account for Satellite Sensor Spoofing',
        authors: 'Benjamin Cyr, Yan Long, Takeshi Sugawara, Kevin Fu',
        venue: 'SpaceSec 2023',
        links: {
            pdf: 'files/spacesec23.pdf',
            website: 'https://www.ndss-symposium.org/ndss-paper/auto-draft-407/'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://www.ndss-symposium.org/ndss-paper/auto-draft-407/' }
        ]
    },
    {
        year: 2022,
        type: 'Conference',
        area: ['software-ai-security', 'physical-sensing-security'],
        title: 'Side Auth: Sensor Side Channels Considered Beneficial by Synthesizing Virtual Sensors for Authentication',
        authors: 'Yan Long, Kevin Fu',
        venue: 'ACM/ACSA NSPW 2022',
        ccf: 'CCF-C',
        acceptanceRate: 'Acceptance rate 38%',
        links: {
            pdf: 'files/nspw22.pdf',
            website: 'https://dl.acm.org/doi/10.1145/3584318.3584321'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://dl.acm.org/doi/10.1145/3584318.3584321' }
        ]
    },
    {
        year: 2021,
        type: 'Journal',
        area: ['physical-sensing-security'],
        award: 'ACM GetMobile Research Highlight',
        title: 'VeriMask: Facilitating Decontamination of N95 Masks in the COVID-19 Pandemic: Challenges, Lessons Learned, and Safeguarding the Future',
        authors: 'Yan Long, Alexander Curtiss, Sara Rampazzi, Josiah Hester, Kevin Fu',
        venue: 'ACM IMWUT/UbiComp 2021',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 22%',
        links: {
            pdf: 'files/imwut21.pdf',
            code: 'https://github.com/longyan97/VeriMask_Designs',
            website: 'https://spqrlab1.github.io/N95deconProject.html'
        },
        extraLinks: [
            { label: 'Website', url: 'https://spqrlab1.github.io/N95deconProject.html' },
            { label: 'Paper Link', url: 'https://dl.acm.org/doi/abs/10.1145/3478105' },
            { label: 'Code', url: 'https://github.com/longyan97/VeriMask_Designs' }
        ]
    },
    {
        year: 2021,
        type: 'Journal',
        area: ['physical-sensing-security'],
        title: 'Protecting COVID-19 Vaccine Transportation and Storage from Analog Cybersecurity Threats',
        authors: 'Yan Long, Sara Rampazzi, Takeshi Sugawara, Kevin Fu',
        venue: 'Biomedical Instrumentation & Technology 2021',
        links: {
            pdf: 'files/bit21.pdf',
            website: 'https://meridian.allenpress.com/bit/article/55/3/112/469795/Protecting-COVID-19-Vaccine-Transportation-and'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://meridian.allenpress.com/bit/article/55/3/112/469795/Protecting-COVID-19-Vaccine-Transportation-and' }
        ]
    },
    {
        year: 2020,
        type: 'Poster',
        area: ['physical-sensing-security'],
        award: 'Best COVID-19 Response Poster Runner-up (top 8%)',
        title: 'Automating Decontamination of N95 Masks for Frontline Workers in the COVID-19 Pandemic',
        authors: 'Yan Long, Alexander Curtiss, Sara Rampazzi, Josiah Hester, Kevin Fu',
        venue: 'ACM SenSys 2020',
        ccf: 'CCF-B',
        links: {
            website: 'https://spqrlab1.github.io/N95deconProject.html'
        },
        extraLinks: [
            { label: 'Website', url: 'https://spqrlab1.github.io/N95deconProject.html' },
            { label: 'Paper Link', url: 'https://dl.acm.org/doi/10.1145/3384419.3430613' }
        ]
    },
    {
        year: 2019,
        type: 'Conference',
        area: ['software-ai-security', 'physical-sensing-security'],
        title: 'The Catcher in the Field: A Fieldprint based Spoofing Detection for Text-Independent Speaker Verification',
        authors: 'Chen Yan*, Yan Long*, Xiaoyu Ji, Wenyuan Xu',
        venue: 'ACM CCS 2019',
        ccf: 'CCF-A',
        acceptanceRate: 'Acceptance rate 16%',
        links: {
            pdf: 'files/ccs19.pdf',
            website: 'https://dl.acm.org/doi/10.1145/3319535.3354248'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://dl.acm.org/doi/10.1145/3319535.3354248' }
        ]
    },
    {
        year: 2019,
        type: 'Conference',
        area: ['physical-sensing-security'],
        title: 'A Novel Biomimetic Stimulator System for Neural Implant',
        authors: 'Po-Min Wang, Stanislav Culaclii, William Yang, Yan Long, Jonathan Massachi, Yi-Kai Lo, Wentai Liu',
        venue: 'IEEE/EMBS NER 2019',
        links: {
            pdf: 'files/embs19.pdf',
            website: 'https://ieeexplore.ieee.org/document/8716942'
        },
        extraLinks: [
            { label: 'Paper Link', url: 'https://ieeexplore.ieee.org/document/8716942' }
        ]
    }
];
