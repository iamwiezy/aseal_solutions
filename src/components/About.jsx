import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMetricsTimeline() {
  const { scrollYProgress } = useScroll();

  // Metrics cards parallax offsets
  const metricsOffsets = ["200+", "350+", "20+", "15K"].map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0, -50 - i * 10])
  );

  // Timeline items
  const timelineItems = [
    {
      year: 2020,
      title: "First product launch",
      desc: "Released first product...",
    },
    {
      year: 2021,
      title: "Early Growth...",
      desc: "Introduced new features...",
    },
  ];

  const timelineOffsets = timelineItems.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0, 50 + i * 20])
  );

  return (
    <section id="about" className="relative z-0">
      {/* Metrics */}
      <div className="metrics-container flex gap-6">
        {["200+", "350+", "20+", "15K"].map((value, i) => (
          <motion.div
            key={i}
            className="metrics-card p-4 bg-white rounded-lg shadow-md"
            style={{ y: metricsOffsets[i] }}>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-gray-500">Some description here</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline-section flex mt-20 gap-12">
        <div className="timeline-left flex-1">
          <motion.h2
            className="text-3xl font-bold mb-4"
            style={useTransform(scrollYProgress, [0, 1], [0, -50])}>
            Building a Better Way...
          </motion.h2>
          <p>From our first release to serving hundreds of clients...</p>
        </div>

        <div className="timeline-right flex-1 space-y-8">
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              className="timeline-item p-4 bg-white rounded-lg shadow"
              style={{ y: timelineOffsets[i] }}>
              <span className="text-blue-600 font-bold">{item.year}</span>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
