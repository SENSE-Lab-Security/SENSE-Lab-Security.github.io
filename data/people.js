// data/people.js
const directorData = {
    lastName: 'Long',
    firstName: 'Yan',
    displayName: 'Dr. Yan Long',
    role: 'Faculty',
    education: 'Ph.D. from the University of Michigan',
    position: 'Tenure-track Assistant Professor in IoT & AI',
    status: 'Director',
    photo: 'images/people/yan-long.webp',
    website: 'https://yanlong.site/'
};

// Current members are intentionally stored in visible group order.
// To reorder a card, move its object within a members array.
// To move a person to another group, move the whole object between arrays.
const peopleGroups = [
    {
        id: 'phd-student',
        label: 'Ph.D. Students',
        filterLabel: 'Ph.D. Student',
        members: [
            {
        lastName: 'Zheng',
        firstName: 'Pai',
        role: 'Ph.D. Student',
        year: 'Since 2025 Fall',
        institution: 'UG & MS from UIUC',
        researchInterest: 'AI for Security',
        photo: 'images/people/pai-zheng.webp'
    },
    {
        lastName: 'Yan',
        firstName: 'Haoran',
        role: 'Ph.D. Student',
        year: 'Since 2025 Fall',
        institution: 'UG from HIT',
        researchInterest: 'Electromagnetic & Sensing Security',
        photo: 'images/people/haoran-yan.webp'
    },
    {
        lastName: 'Shao',
        firstName: 'Ziyu',
        role: 'Ph.D. Student',
        year: 'Since 2026 Fall',
        institution: 'MS from UESTC',
        researchInterest: 'Electromagnetic & Sensing Security',
        photo: 'images/people/ziyu-shao.webp'
    },
    {
        lastName: 'Cong',
        firstName: 'Ziping',
        role: 'Ph.D. Student',
        year: '2026 Fall',
        institution: 'MS from TU Munich',
        researchInterest: 'Embodied AI Security',
        photo: 'images/people/ziping-cong.webp'
    },
    {
        lastName: 'Zhang',
        firstName: 'Chi',
        role: 'Ph.D. Student',
        year: 'Since 2027 Spring',
        institution: 'UG from Zhejiang University',
        researchInterest: 'Embodied AI Security',
        photo: 'images/people/chi-zhang.webp'
    }
        ]
    },
    {
        id: 'mphil-student',
        label: 'MPhil Students',
        filterLabel: 'MPhil Student',
        members: [
            {
        lastName: 'Li',
        firstName: 'Yaxin',
        role: 'MPhil Student',
        year: 'Since 2025 Fall',
        institution: 'UG from Sichuan University',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/yaxin-li.webp'
    },
    {
        lastName: 'Zhang',
        firstName: 'Shuhao',
        role: 'MPhil Student',
        year: 'Since 2025 Fall',
        institution: 'UG from Jiangsu Normal University',
        researchInterest: 'Sensing & AI Security',
        photo: 'images/people/shuhao-zhang.webp'
            }
        ]
    },
    {
        id: 'neu-phd-student',
        label: 'Ph.D. Students at NEU (Boston)',
        filterLabel: 'Ph.D. Student',
        filterId: 'phd-student',
        members: [
            {
        lastName: 'Cui',
        firstName: 'Jiancong',
        role: 'Ph.D. Student at NEU (Boston)',
        year: 'Since 2024',
        institution: 'MS from UCAS',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/jiancong-cui.webp',
        website: 'https://jiancongcui.github.io/'
    },
    {
        lastName: 'Zhuang',
        firstName: 'Hui',
        role: 'Ph.D. Student at NEU (Boston)',
        year: 'Since 2024',
        institution: 'MS from Shandong University',
        researchInterest: 'Embedded & CPS Security',
        photo: 'images/people/hui-zhuang.webp',
        website: 'https://zhuang-hui.github.io/'
            }
        ]
    },
    {
        id: 'research-intern',
        label: 'Research Interns',
        filterLabel: 'Research Intern',
        members: [
            {
        lastName: 'Zhang',
        firstName: 'Yuchen',
        role: 'Research Intern',
        year: 'Since 2026',
        institution: 'MS at HKU',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/yuchen-zhang.webp'
    },
    {
        lastName: 'Sheng',
        firstName: 'Chenfan',
        role: 'Research Intern',
        year: 'Since 2026',
        institution: 'MS at the University of Sydney',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/hacker-placeholder.webp'
    },
    {
        lastName: 'Zhang',
        firstName: 'Xuhui',
        role: 'Research Intern',
        year: 'Since 2026',
        institution: 'UG at HIT',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/xuhui-zhang.webp'
    },
    {
        lastName: 'Zheng',
        firstName: 'Yucheng',
        role: 'Research Intern',
        year: 'Since 2026',
        institution: 'UG at Xiamen University Malaysia',
        researchInterest: 'Software & AI Security',
        photo: 'images/people/yucheng-zheng.webp'
            }
        ]
    },
    {
        id: 'pawsdocs',
        label: 'Pawsdocs',
        filterLabel: 'Pawsdocs',
        members: [
            {
        lastName: '',
        firstName: 'Coconut & Xing',
        displayName: 'Coconut & Xing',
        role: 'Pawsdocs',
        year: 'Since 2022',
        institution: 'SENSE Lab',
        researchInterest: 'Cat-assisted security exploration',
        photo: 'images/people/pawsdocs.webp'
            }
        ]
    }
];

const peopleData = [
    directorData,
    ...peopleGroups.flatMap(group => group.members)
];

const alumniData = [
    {
        lastName: 'Alam',
        firstName: 'Tobias',
        role: 'Research Intern',
        education: 'UG & MS in CS @ UMich',
        status: '2022 - 2025',
        next: 'To Be Added',
        photo: 'images/people/tobias-alam.webp',
        website: 'https://www.linkedin.com/in/tobias-alam-5a4057215/'
    },
    {
        lastName: 'Pellegrini',
        firstName: 'Christopher',
        role: 'Ph.D. Student',
        education: 'Ph.D. in Cybersecurity @ NEU',
        status: '2024 - 2025',
        next: 'To Be Added',
        photo: 'images/people/christopher-pellegrini.webp',
        website: 'https://www.linkedin.com/in/christopher-pellegrini-6a4226185/'
    },
    {
        lastName: 'Shamsi',
        firstName: 'Nina',
        role: 'Ph.D. Student',
        education: 'Ph.D. in ECE @ NEU',
        status: '2023 - 2025',
        next: 'To Be Added',
        photo: 'images/people/nina-shamsi.webp',
        website: 'https://scholar.google.com/citations?hl=en&user=uIrOBY8AAAAJ&view_op=list_works'
    },
    {
        lastName: 'Weng',
        firstName: 'Haozhe',
        role: 'MPhil Student',
        education: 'MS in ECE @ ZJU',
        status: '2024 - 2025',
        next: 'To Be Added',
        photo: 'images/people/haozhe-weng.webp'
    },
    {
        lastName: 'Bargfrede',
        firstName: 'Sarah',
        role: 'Research Intern',
        education: 'BS in CS @ UMich',
        status: '2023 - 2024',
        next: 'To Be Added',
        photo: 'images/people/sarah-bargfrede.webp',
        website: 'https://www.linkedin.com/in/sarah-bargfrede-1428301b4/'
    },
    {
        lastName: 'Yao',
        firstName: 'Jiaming',
        role: 'Research Intern',
        education: 'MS in Data Science @ UMich',
        status: '2023 - 2024',
        next: 'To Be Added',
        photo: 'images/people/jiaming-yao.webp',
        website: 'https://www.linkedin.com/in/jiaming-yao-a0ab12219/'
    },
    {
        lastName: 'Sano',
        firstName: 'Emiko',
        role: 'Research Intern',
        education: 'High-school Student',
        status: '2023 - 2024',
        next: 'To Be Added',
        photo: 'images/people/emiko-sano.webp',
        website: 'https://www.linkedin.com/in/emiko-sano/'
    },
    {
        lastName: 'Sun',
        firstName: 'Yumai',
        role: 'MPhil Student',
        education: 'MS in ECE @ UMich',
        status: '2022 - 2023',
        next: 'To Be Added',
        photo: 'images/people/yumai-sun.webp',
        website: 'https://www.linkedin.com/in/yumai-sun-49107b13b/'
    },
    {
        lastName: 'Cheng',
        firstName: 'Haoliang',
        role: 'Research Intern',
        education: 'BS in CE @ UMich',
        status: '2022 - 2023',
        next: 'To Be Added',
        photo: 'images/people/haoliang-cheng.webp',
        website: 'https://www.linkedin.com/in/haoliang-cheng/'
    },
    {
        lastName: 'Prasad',
        firstName: 'Shivan',
        role: 'Research Intern',
        education: 'BS in CS @ UMich',
        status: '2021 - 2022',
        next: 'To Be Added',
        photo: 'images/people/shivan-prasad.webp',
        website: 'https://www.linkedin.com/in/shivan-sunny-prasad-b50376197/'
    },
    {
        lastName: 'Li',
        firstName: 'Mia',
        role: 'Research Intern',
        education: 'BS in CS @ UMich',
        status: '2020',
        next: 'To Be Added',
        photo: 'images/people/mia-li.webp'
    },
    {
        lastName: 'Lyu',
        firstName: 'Weikun',
        role: 'Research Intern',
        education: 'BS in CS @ UMich',
        status: '2020',
        next: 'To Be Added',
        photo: 'images/people/weikun-lyu.webp',
        website: 'https://www.linkedin.com/in/weikun-lyu-725311196/'
    }
].map(person => ({
    ...person,
    isAlumni: true,
    endYear: Number(person.status.match(/\d{4}(?!.*\d{4})/)?.[0] || 0)
})).sort((a, b) => b.endYear - a.endYear);
