var config = {
    style: 'mapbox://styles/oribaber/ck9kbeiv01m9h1io7zc73wfsi',
    accessToken: 'pk.eyJ1Ijoib3JpYmFiZXIiLCJhIjoiY2lnNzg2MGN3MGs5cHVubTh2NGhhbDBnbCJ9.JDFu3EQbtyBljh_yrsV3SA',
    theme: 'light',
    alignment: 'left',
    title: 'Equity in Park Access During COVID-19',
    subtitle: 'CDC’s recommendation to “visit parks that are close to your home” not an option for 100 million Americans',
    byline: 'By Ori Baber',
    footer: 'Sources: <a href="https://www.cityhealthdashboard.com/"> City Health Dashboard</a>, the Trust for Public Land’s <a href=" https://www.tpl.org/parkserve"> ParkServe&reg; database</a>',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Widespread COVID-19 Closures Change Routines',
            image: '',
            description: 'Unable to visit private gyms or commercial athletic facilities due to widespread and prolonged COVID-19 closures, many are turning to their local parks to stay active, get fresh air and vitamin D, and relieve stress. Yet for others, public parks have been the only financially accessible outlets for these activities, especially for those with budgets that do not allow discretionary spending on gym memberships, group fitness classes, etc.</p><p>A <a href="https://www.nrpa.org/our-work/Three-Pillars/health-wellness/coronavirus-disease-2019/the-essential-role-of-parks-and-recreation/"> study </a> by the National Recreation and Park Association reports that 83% of adults found “exercising at local parks, trails, and open spaces essential to maintaining their mental and physical health during the COVID-19 pandemic." <p> Left: Golden Gate Park, San Francisco, CA',
            location: {
            center: [-122.47732, 37.76575],
            zoom: 13.47,
            pitch: 60.00,
            bearing: -96.02
            },
            onChapterEnter: [
                {
                  layer: 'new-york-park-access-lines',
                  opacity: 0
                },
                {
                  layer: 'lake-charles-park-access-lines',
                  opacity: 0
                },
                {
                  layer: 'charleston-park-access-lines',
                  opacity: 0
                },
                {
                  layer: 'portland-park-access-lines',
                  opacity: 0
                },
                {
                  layer: 'portland-park-access',
                  opacity: 0
                },
                {
                  layer: 'new-york-park-access',
                  opacity: 0
                },
                {
                  layer: 'charleston-park-access',
                  opacity: 0
                },
                {
                  layer: 'lake-charles-park-access',
                  opacity: 0
                },
                {
                  layer: 'central-park-lines',
                  opacity: 0
                },
                {
                  layer: 'central-park-buffer',
                  opacity: 0
                },
                {
                  layer: 'mapbox-satellite',
                  opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            title: 'Visting Parks to Stay Physically and Mentally Healthy',
            image: '',
            description: 'Recognizing that “staying physically active is one of the best ways to keep your mind and body healthy”, the <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/visitors.html"> CDC issued recommendations </a> for visiting park and recreation facilities during the COVID-19 pandemic. First on the list of recommendations is to stay close to home.</p> <p>However, according to the Trust for Public Land’s <a href=" https://www.tpl.org/parkserve"> ParkServe&reg; database</a>, nearly 100 million residents do not have a park nearby.</p> <p>Left: Boston Common, Boston, MA</p>',
            location: {
              center: [-71.07040, 42.35506],
              zoom: 14.2,
              pitch: 0.00,
              bearing: 0.00
                      },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            title: 'Park Access',
            image: '',
            description: 'ParkServe&reg; defines accessibility as having a park within a 10-minute (approximately half mile) walk of home.',
            location: {
              center: [-73.96881, 40.77871],
              zoom: 13.02,
              pitch: 51.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 1
              }
          ],
          onChapterExit: []
        },
        {
            id: 'chapter-4',
            title: 'Half Mile Walk (~10 Mins)',
            image: '',
            description: 'For example, here’s the area ‘served’ by a 10-minute walk of Central Park, NYC. ParkServe&reg; repeated a similar analysis for every publicly owned local, state, and federal park, school parks with shared use agreements, and privately-owned parks that allow public access to determine the percent of the population with and without convenient park access.',
            location: {
              center: [-73.96881, 40.77871],
              zoom: 13.02,
              pitch: 51.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 1
              },
              {
                layer: 'central-park-buffer',
                opacity: 0.5
              },
              {
                layer: 'mapbox-satellite',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            title: 'New York, NY',
            image: './park-access-mapstory/images/legend.png',
            description: 'According to these data from 2017, 98.8% of New York’s 8.5M residents had park access.',
            location: { //New York
            center: [-74.01808, 40.71582],
            zoom: 10.09,
            pitch: 55.00,
            bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 1
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 1
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 0
              }
          ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            title: 'Portland',
            image: 'D:\\GitHub\\ORRYANB.github.io\\park-access-mapstory\\images\\legend.png',
            description: '88% of Portland’s residents had park access. Most, but not all neighborhoods, had better than average percent access.',
            location: { //Portland
            center: [-122.63378, 45.59822],
            zoom: 8.73,
            pitch: 39.00,
            bearing: 0.31
            },
            onChapterEnter: [
              {
              layer: 'portland-park-access-lines',
              opacity: 1
            },
            {
              layer: 'portland-park-access',
              opacity: 1
            }
          ],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            title: 'Charleston, SC',
            image: '',
            description: 'However, only 50.7% of Charleston’s residents had park access. Most neighborhoods had poorer than average percent access.',
            location: { //Need to update
              center: [-79.97289, 32.81137],
              zoom: 10.98,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 1
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 1
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 0
              }
          ],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            title: 'Lake Charles, LA',
            image: '',
            description: 'Only 17.2% of Lake Charles’s residents had park access. 48.3% of Lake Charles’s residents are Black, 80.7% of whom do not have convenient access to a park.',
            location: {
            center: [-93.24858, 30.23549],
            zoom: 10.65,
            pitch: 45.00,
            bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 1
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 1
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 0
              }
          ],
            onChapterExit: []
        },
        {
            id: 'chapter-9',
            title: 'Equitable Park Access',
            image: '',
            description: 'Historically underserved and marginalized communities have been <a href=" https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/racial-ethnic-minorities.html"> disproportionately affected by COVID19</a>. Recovery efforts must address inequities in living conditions that impact health risks and outcomes, including disparities in access parks as opportunities to stay physically and mentally healthy.</p><p>In a <a href=" https://cityparksalliance.org/resource/investing-equitable-urban-park-systems-case-studies-recommendations/"> recent report</a>, the City Parks Alliance provides several important recommendations to improve equity in park access. The Urban Institute recently <a href=" https://www.urban.org/research/publication/investing-equitable-urban-park-systems"> summarized funding strategies </a>, to invest in park equity.</p><p>Visit the City Health Dashboard to explore park access and health outcomes in your community: <a href="https://www.cityhealthdashboard.com/"> City Health Dashboard</a> ',
            location: {
              center: [-97.26383, 37.88496],
              zoom: 3.76,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'new-york-park-access-lines',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access-lines',
                opacity: 0
              },
              {
                layer: 'charleston-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access-lines',
                opacity: 0
              },
              {
                layer: 'portland-park-access',
                opacity: 0
              },
              {
                layer: 'new-york-park-access',
                opacity: 0
              },
              {
                layer: 'charleston-park-access',
                opacity: 0
              },
              {
                layer: 'lake-charles-park-access',
                opacity: 0
              },
              {
                layer: 'central-park-lines',
                opacity: 0
              },
              {
                layer: 'central-park-buffer',
                opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                opacity: 1
              }
          ],
            onChapterExit: []
        }
    ]
};
