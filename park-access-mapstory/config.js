var config = {
    style: 'mapbox://styles/oribaber/ck9kbeiv01m9h1io7zc73wfsi',
    accessToken: 'pk.eyJ1Ijoib3JpYmFiZXIiLCJhIjoiY2lnNzg2MGN3MGs5cHVubTh2NGhhbDBnbCJ9.JDFu3EQbtyBljh_yrsV3SA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Park Access & COVID-19',
    subtitle: 'CDC recommends if visiting a park 'stay close to home' TEST',
    byline: 'Ori Baber, PhD',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Parks & Health',
            image: './path/to/image/source.png',
            description: 'Parks are healthy. People are visiting parks. CDC recommends staying close to home.',
            location: {
              center: [-73.96594, 40.78334],
              zoom: 12.94,
              pitch: 53.00,
              bearing: -1.94
            },
            onChapterEnter: [
              {
                Layer: 'central-park-buffer',
                opacity: 0,
                Layer: 'central-park-lines',
                opacity: 0,
              ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            title: 'Park within a 10-Minute Walk',
            image: './path/to/image/source.png',
            description: 'TPL uses 10-minute walk a 'close to home'. Within the boundary live within a 10-minute walk of Central Park, NYC.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [
              {
                Layer: 'mapbox-satellite',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                Layer: 'mapbox-satellite',
                opacity: 1
              }
            ]
        },
        {
            id: 'chapter-3',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
