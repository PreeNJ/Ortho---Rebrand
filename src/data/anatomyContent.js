export const anatomyContent = {
  sections: [
    {
      id: 'upper-limb',
      title: 'Upper Limb Anatomy',
      topics: [
        {
          title: 'Shoulder Complex',
          notes: `
• Glenohumeral joint: ball-and-socket, highly mobile
• Rotator cuff: SITS muscles (Supraspinatus, Infraspinatus, Teres minor, Subscapularis)
• Labrum: fibrocartilaginous rim deepening the glenoid
• Common injuries: rotator cuff tears, labral tears, impingement syndrome
          `.trim()
        },
        {
          title: 'Elbow Joint',
          notes: `
• Three articulations: humeroulnar, humeroradial, proximal radioulnar
• Medial (ulnar) collateral ligament: critical for valgus stability
• Lateral collateral complex: prevents posterolateral rotatory instability
• Common pathologies: tennis elbow (lateral epicondylitis), golfer's elbow (medial epicondylitis)
          `.trim()
        },
        {
          title: 'Wrist & Hand',
          notes: `
• Eight carpal bones in two rows
• Scaphoid: most commonly fractured carpal bone
• Flexor retinaculum forms carpal tunnel roof
• Median nerve compression → carpal tunnel syndrome
• Common injuries: scaphoid fractures, distal radius fractures (Colles', Smith's)
          `.trim()
        }
      ]
    },
    {
      id: 'lower-limb',
      title: 'Lower Limb Anatomy',
      topics: [
        {
          title: 'Hip Joint',
          notes: `
• Ball-and-socket joint: femoral head and acetabulum
• Labrum: fibrocartilaginous rim increasing stability and depth
• Blood supply: medial and lateral circumflex femoral arteries
• Ligamentum teres: contains artery to femoral head
• Common pathologies: hip fractures, avascular necrosis, femoroacetabular impingement
          `.trim()
        },
        {
          title: 'Knee Joint',
          notes: `
• Tibiofemoral and patellofemoral articulations
• Menisci: medial (C-shaped) and lateral (O-shaped) fibrocartilage
• Cruciate ligaments: ACL (prevents anterior tibial translation), PCL (prevents posterior)
• Collateral ligaments: MCL (medial stability), LCL (lateral stability)
• Common injuries: ACL tears, meniscal tears, patellar dislocations
          `.trim()
        },
        {
          title: 'Ankle & Foot',
          notes: `
• Talocrural (ankle) joint: mortise formed by tibia and fibula
• Subtalar joint: talus and calcaneus, critical for inversion/eversion
• Achilles tendon: strongest tendon, inserts on calcaneus
• Plantar fascia: supports medial longitudinal arch
• Common injuries: ankle sprains (ATFL most common), Achilles ruptures, plantar fasciitis
          `.trim()
        }
      ]
    },
    {
      id: 'spine',
      title: 'Spine & Vertebral Column',
      topics: [
        {
          title: 'Cervical Spine',
          notes: `
• C1 (Atlas): no vertebral body, supports skull
• C2 (Axis): odontoid process (dens) allows head rotation
• C3-C7: typical cervical vertebrae with bifid spinous processes
• Transverse foramina: contain vertebral arteries
• Common pathologies: whiplash, cervical radiculopathy, atlantoaxial instability
          `.trim()
        },
        {
          title: 'Thoracic & Lumbar Spine',
          notes: `
• Thoracic: 12 vertebrae articulating with ribs, limited mobility
• Lumbar: 5 vertebrae, large bodies supporting body weight
• Intervertebral discs: annulus fibrosus and nucleus pulposus
• Facet joints: provide stability and guide motion
• Common pathologies: disc herniation, spinal stenosis, spondylolisthesis
          `.trim()
        }
      ]
    }
  ]
}
