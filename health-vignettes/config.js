var config = {
    style: 'mapbox://styles/ori-urban3/ckjeg5btl7gpf19mcu6dzknlb',
    accessToken: 'pk.eyJ1Ijoib3JpLXVyYmFuMyIsImEiOiJja2plZXAycnUwZ21xMnVwOGVubDllazI3In0.FhXu4OmZxPRoH0d9NCvvXw',
    theme: 'light',
    alignment: 'left',
    title: 'Geography of Health',
    subtitle: 'The role of place, location and geography in health, well-being and disease',
    byline: 'By Ori Baber',
    footer: 'Sources: <a href="https://www.cityhealthdashboard.com/"> City Health Dashboard</a>',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Life Expectancy at Birth by US County',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/le-legend.png?raw=true',
            description: '',
            location: {
              center: [-96.29769, 38.69331],
              zoom: 4.63,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 1
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            title: 'Prevalence of Obesity by US County',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/obesity-legend.png?raw=true',
            description: '',
            location: {
              center: [-96.29769, 38.69331],
              zoom: 4.63,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 1
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            title: 'Prevalence of COPD by US County',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/copd-legend.png?raw=true',
            description: '',
            location: {
              center: [-96.29769, 38.69331],
              zoom: 4.63,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 1
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            title: 'Prevalence of Smoking by US County',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/smoking-legend.png?raw=true',
            description: '',
            location: {
              center: [-96.29769, 38.69331],
              zoom: 4.63,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 1
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            title: 'Life Expectancy at Birth by US County',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/le-legend.png?raw=true',
            description: 'Greater Atlanta',
            location: {
              center: [-84.51564, 33.78026],
              zoom: 9.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 1
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            title: 'Life Expectancy at Birth by US Census Tract',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/le-legend.png?raw=true',
            description: 'Greater Atlanta',
            location: {
              center: [-84.51564, 33.78026],
              zoom: 9.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 1
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            title: 'Prevalence of Obesity by US Census Tract',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/obesity-legend.png?raw=true',
            description: 'Greater Atlanta',
            location: {
              center: [-84.51564, 33.78026],
              zoom: 9.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 1
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            title: 'Prevalence of COPD by US Census Tract',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/copd-legend.png?raw=true',
            description: 'Greater Atlanta',
            location: {
              center: [-84.51564, 33.78026],
              zoom: 9.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 1
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-9',
            title: 'Prevalence of Smoking by US Census Tract',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/smoking-legend.png?raw=true',
            description: 'Greater Atlanta',
            location: {
              center: [-84.51564, 33.78026],
              zoom: 9.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 1
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            title: '',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/grandale.png?raw=true',
            description: '',
            location: {
              center: [-83.30584, 42.63288],
              zoom: 8.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'life-expectancy',
                  opacity: 0
                },
                {
                  layer: 'obesity',
                  opacity: 0
                },
                {
                  layer: 'copd',
                  opacity: 0
                },
                {
                  layer: 'smoking',
                  opacity: 0
                },
                {
                  layer: 'atlanta_life_exp',
                  opacity: 0
                },
                {
                  layer: 'atlanta_obesity',
                  opacity: 0
                },
                {
                  layer: 'atlanta_copd',
                  opacity: 0
                },
                {
                  layer: 'atlanta_smoking',
                  opacity: 0
                },
                {
                  layer: 'detroit-life-expectancy',
                  opacity: 1
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 0
                },
                {
                  layer: 'detroit-copd',
                  opacity: 0
                },
                {
                  layer: 'detroit-smoking',
                  opacity: 0
                }
            ],
            onChapterExit: []
        }
    ]
};
