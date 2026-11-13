INSERT INTO meetings (
    date, meeting_type, presiding, conducting, announcements,
    opening_hymn, opening_prayer, ward_business, stake_business,
    sacrament_hymn, speakers, closing_hymn, closing_prayer
    ) VALUES
(
    '2026-11-1',
    'testimony',
    'Bishop Jensen',
    'Brother Marsmaker',
    ARRAY[]::TEXT[],
    '{ "number": 7, "title": "Israel, Israel God is Calling" }',
    'Sister McMean',
    '[{ "description": "Sustaining of new Primary president" }]',
    false,
    '{"number":169,"title":"God, Our Father, Hear Us Pray"}',
    '[]',
    '{"number":98,"title":"I Need Thee Every Hour"}','Brother Davis'
),
(
    '2026-11-08',
    'regular',
    'Bishop Jensen',
    'Brother Marsmaker',
    ARRAY['Ward temple night: Nov 28'],
    '{"number":2,"title":"The Spirit of God"}',
    'Sister Ramirez',
    '[{"description":"Sustaining of new Sunday School president"}]',
    true,
    '{"number":169,"title":"In Remembrance of Thy Suffering"}',
    '[
    {"name":"Sister Hinds","topic":"The Sacrament","type":"speaker"},
    {"name":"Brother Thomas","topic":"Covenant Keeping","type":"speaker"}
    ]',
    '{"number":31,"title":"O God, Our Help in Ages Past"}',
    'Brother Lewis'
),(
    '2026-11-15',
    'regular',
    'Bishop Jensen',
    'Brother Matthis',
    ARRAY['Ministering interviews this week'],
    '{"number":85,"title":"How Firm a Foundation"}',
    'Brother Keith'
    '{"number":173,"title":"While of These Emblems We Partake"}',
    '[
    {"name":"Sister Marsmaker","topic":"Personal Revelation","type":"speaker"},
    {"name":"Youth Choir","topic":"","type":"musical-number"},
    {"name":"Brother Williams","topic":"Temple Covenants","type":"speaker"}
    ]',
    '{"number":226,"title":"Improve the Shining Moments"}',
    'Sister Jensen'
),(
    '2026-11-22',
    'stake',
    'President Sheppard',
    'Bishop Jensen',
    ARRAY[]::TEXT[],
    '{ "number": 2, "title": "The Spirit of God" }',
    'Sister Williams'
    '[]',
    true,
    '{ "number": 171, "title": "With Humble Heart" }',
    '[
    { "name": "Sister Allred", "topic": "Prayer", "type": "speaker" },
    { "name": "Youth Choir", "topic": ", "type": "musical-number" }
    ]',
    '{"number":111,"title":"Rock of Ages"}',
    'Brother Cooper'
),
(
    '2026-11-29',
    'regular',
    'Bishop Jensen',
    'Brother Marsmaker',
    ARRAY[]::TEXT[],
    '{ "number": 55, "title": "Lo the Mighty God Appearing" }',
    'Sister Potter'
    '[]',
    false,
    '{ "number": 185, "title": "Reverently and Meekly Now" }',
    '[
    { "name": "Sister Hinds", "topic": "Faith in Jesus Christ", "type": "speaker" },
    { "name": "Brother Thomas", "topic": "The New Testament", "type": "speaker" }
    ]',
    '{"number":31,"title":"O God, Our Help in Ages Past"}',
    'Brother Barker'
),
(
    '2026-12-6',
    'testimony',
    'Bishop Jensen',
    'Brother Matthis',
    ARRAY['Christmas Food Drive: Dec 19'],
    '{ "number": 2, "title": "Joy to the World" }',
    'Sister Newby'
    '[{ "description": "Release and Sustaining of old and new Relief Society Presidents" }]',
    true,
    '{"number":196,"title":"Jesus, Once of Humble Birth"}',
    '[]',
    '{"number":203,"title":"Angels We Have Heard on High"}',
    'Brother Newby'
),
(
    '2026-12-13',
    'regular',
    'Bishop Jensen',
    'Brother Matthis',
    ARRAY[]::TEXT[],
    '{ "number": 202, "title": "Oh Come All Ye Faithful" }',
    'Sister Lewis'
    '[]',
    false,
    '{ "number": 125, "title": "How Gentle God`s Commands" }',
    '[
    { "name": "Brother Potter", "topic": "The Book of Mormon", "type": "speaker" },
    { "name": "Brother DeSilva", "topic": "The Doctrine and Covenants", "type": "speaker" }
    ]',
    '{"number":205,"title":"Once in Royal Davids City"}',
    'Brother Murphy'
),
(
    '2026-12-20',
    'regular',
    'Bishop Jensen',
    'Brother Marsmaker',
    ARRAY[]::TEXT[],
    '{ "number": 208, "title": "O Little Town of Bethlehem" }',
    'Brother Allred'
    '[]',
    true,
    '{ "number": 171, "title": "With Humble Heart" }',
    '[
    { "name": "Brother Grimes", "topic": "Charity", "type": "speaker" },
    { "name": "Youth Choir", "topic": ", "type": "musical-number" }
    ]',
    '{"number":204,"title":"Silent Night"}',
    'Brother Seavy'
),
(
    '2026-12-27',
    'regular',
    'Bishop Jensen',
    'Brother Marsmaker',
    ARRAY[]::TEXT[],
    '{ "number": 146, "title": "Gently Raise the Sacred Strain" }',
    'Sister Barker'
    '[]',
    false,
    '{ "number": 184, "title": "Upon the Cross of Calvary" }',
    '[
    { "name": "Sister Allred", "topic": "Prayer", "type": "speaker" },
    { "name": "Sister Lewis", "topic": "Repentance", "type": "speaker" },
    { "name": "Sister O`keefe", "topic": "Fasting", "type": "speaker" }
    ]',
    '{"number":31,"title":"O God, Our Help in Ages Past"}',
    'Brother Wilson'
);