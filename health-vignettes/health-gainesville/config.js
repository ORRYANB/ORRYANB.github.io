var config = {
    style: 'mapbox://styles/ori-urban3/ckjiyfffi040u1btf1q81a6bv',
    accessToken: 'pk.eyJ1Ijoib3JpLXVyYmFuMyIsImEiOiJja2plZXAycnUwZ21xMnVwOGVubDllazI3In0.FhXu4OmZxPRoH0d9NCvvXw',
    theme: 'light',
    alignment: 'left',
    title: 'Gainesville, FL',
    subtitle: ' ',
    byline: ' ',
    footer: 'Sources: <a href="https://www.cityhealthdashboard.com/"> City Health Dashboard</a>',
    chapters: [
      {
          id: 'chapter-1',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-geography/images/le-legend.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'health-alachua',
                opacity: 1
              },
              {
                layer: 'uf',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-2',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-gainesville/images/history.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'health-alachua',
                opacity: 0
              },
              {
                layer: 'uf',
                opacity: 1
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-3',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-gainesville/images/highway.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'health-alachua',
                opacity: 0
              },
              {
                layer: 'uf',
                opacity: 1
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 1
              },
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-4',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-gainesville/images/race.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'health-alachua',
                opacity: 0
              },
              {
                layer: 'uf',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'black-dot-2010',
                opacity: 1
              },
              {
                layer: 'white-dot-2010',
                opacity: 1
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-5',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-gainesville/images/cra.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'health-alachua',
                opacity: 0
              },
              {
                layer: 'uf',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 1
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-6',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-gainesville/images/value.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 50.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 1
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'health-alachua',
                opacity: 0
              },
              {
                layer: 'uf',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-7',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-geography/images/le-legend.png?raw=true',
          description: '',
          location: {
            center: [-82.42309, 29.65085],
            zoom: 11.62,
            pitch: 50.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 0
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0.7
              },
              {
                layer: 'health-alachua',
                opacity: 1
              },
              {
                layer: 'uf',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-8',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-geography/images/streetlight.png?raw=true',
          description: '',
          location: {
            center: [-82.37286, 29.65120],
            zoom: 13.14,
            pitch: 50.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'street-lights',
                opacity: 1
              },
              {
                layer: 'street-light-mesh',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'health-alachua',
                opacity: 1
              },
              {
                layer: 'uf',
                opacity: 0
              }
          ],
          onChapterExit: []
      },
      {
          id: 'chapter-9',
          title: ' ',
          image: 'https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/health-vignettes/health-geography/images/smart.png?raw=true',
          description: '',
          location: {
            center: [-82.37286, 29.65120],
            zoom: 13.14,
            pitch: 50.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                layer: 'street-lights',
                opacity: 1
              },
              {
                layer: 'street-light-mesh',
                opacity: 1
              },
              {
                layer: 'black-dot-2010',
                opacity: 0
              },
              {
                layer: 'white-dot-2010',
                opacity: 0
              },
              {
                layer: 'i75',
                opacity: 0
              },
              {
                layer: 'gainesville-cras',
                opacity: 0
              },
              {
                layer: 'vpa-county-color',
                opacity: 0
              },
              {
                layer: 'vpa-county-grey',
                opacity: 0
              },
              {
                layer: 'health-alachua',
                opacity: 1
              },
              {
                layer: 'uf',
                opacity: 0
              }
          ],
          onChapterExit: []
      }
    ]
};
