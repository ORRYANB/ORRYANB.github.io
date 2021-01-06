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
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/chronic-legend.png?raw=true',
          description: '',
          location: {
            center: [-96.29769, 38.69331],
            zoom: 4.63,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'state-chronic',
                opacity: 1
              },
              {
                layer: 'state-phs',
                opacity: 0
              },
              {
                layer: 'phs-labels',
                opacity: 0
              },
              {
                layer: 'life-expectancy-labels',
                opacity: 0
              },
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
            title: ' ',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/phs-legend.png?raw=true',
            description: '',
            location: {
              center: [-96.29769, 38.69331],
              zoom: 4.63,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 1
                },
                {
                  layer: 'phs-labels',
                  opacity: 1
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-3',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 1
                },
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
            id: 'chapter-4',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-5',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-6',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-7',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-8',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-9',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-10',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-11',
            title: ' ',
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
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
            id: 'chapter-12',
            title: ' ',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/le-legend.png?raw=true',
            description: '',
            location: {
              center: [-83.30584, 42.63288],
              zoom: 8.44,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
        },
        {
            id: 'chapter-13',
            title: ' ',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/grandale.png?raw=true',
            description: 'Sources: <a href="https://earth.google.com/web/@42.37698188,-83.20233701,188.99856567a,0d,60y,25.5310756h,84.6312939t,-0r/data=IhoKFmo4V0RoNG1xR3dkRGtNbnpxU181NEEQAg?utm_source=earth7&utm_campaign=vine&hl=en"> Google Streetview: Recreation Center</a>',
            location: {
              center: [-83.21038, 42.37542],
              zoom: 16.18,
              pitch: 49.50,
              bearing: 26.40
            },
            onChapterEnter: [
                {
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
        },
        {
            id: 'chapter-14',
            title: ' ',
            image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/images/obesity-legend.png?raw=true',
            description: 'Sources: <a href="https://earth.google.com/web/@42.37698188,-83.20233701,188.99856567a,0d,60y,25.5310756h,84.6312939t,-0r/data=IhoKFmo4V0RoNG1xR3dkRGtNbnpxU181NEEQAg?utm_source=earth7&utm_campaign=vine&hl=en"> Google Streetview: Recreation Center</a>',
            location: {
              center: [-83.21038, 42.37542],
              zoom: 16.18,
              pitch: 49.50,
              bearing: 26.40
            },
            onChapterEnter: [
                {
                  layer: 'state-chronic',
                  opacity: 0
                },
                {
                  layer: 'state-phs',
                  opacity: 0
                },
                {
                  layer: 'phs-labels',
                  opacity: 0
                },
                {
                  layer: 'life-expectancy-labels',
                  opacity: 0
                },
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
                  opacity: 0
                },
                {
                  layer: 'detroit-obesity',
                  opacity: 1
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
