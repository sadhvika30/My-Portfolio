import React, { useContext, useState } from 'react';
import { ThemeContext } from "../themeProvider";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import '../Home.css'; // Import a separate CSS file for styles

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [expandedItem, setExpandedItem] = useState(null); // Track the expanded item
  const typeSchool = 'school';
  const typeWork = 'work';

  const timelineData = [
    {
      id: 0,
      date: 'May 2024 - Present',
      title: 'Research Assistant',
      subtitle: 'UW Madison, Wisconsin, USA',
      description: [
        'Developed a deep learning model for DNA sequence analysis using CHIP-Seq and ATAC-seq data, achieving 8% AUPRC improvement in identifying genomic regions and regulatory factors for cancer research. Currently working on a DQN-based agent for network optimization to enhance signal allocation and connectivity management, targeting 15% improvement in network performance under the guidance of <a href="https://ramanathan.ece.wisc.edu/" target="_blank" rel="noopener noreferrer"><strong>Dr. Parmesh Ramanathan</strong></a>.'
      ],
      type: typeWork,
    },
    {
      id: 1,
      date: 'Aug 2023 - May 2025',
      title: 'MS in Data Engineering',
      subtitle: 'University of Wisconsin-Madison',
      description: ['Coursework: Distributed Systems, Big Data Systems, Database Systems, Data Modeling, Operating Systems, Optimization, Artificial Intelligence, Data Visualization.'],
      type: typeSchool,
    },
    {
      id: 2,
      date: 'Sep 2022 - Aug 2023',
      title: 'Data Engineer',
      subtitle: 'Providence Global Center, India',
      description: [
        'Designed and optimized scalable data pipelines in Azure and Databricks for AI-driven health analytics, improving system scalability by 25% and data processing speed by 40%. Integrated TF/IDF for comment analysis and machine learning algorithms into Power BI dashboards, while maintaining 99.9% data availability and reducing operational costs through automated ETL processes.'
      ],
      type: typeWork,
    },
    {
      id: 3,
      date: 'Jan 2022 - Jul 2022',
      title: 'Data Engineer Intern',
      subtitle: 'Anheuser-Busch Inbev, India',
      description: [
        'Led migration to Azure cloud, achieving 25% improved scalability and $15,000 annual cost savings. Built and maintained end-to-end data pipelines for financial products (PTP, ATR, OTC) using Python, SQL, and Azure Data Factory, delivering KPI dashboards that enhanced decision-making by 70% while ensuring 99% data availability for critical business processes.'
      ],
      type: typeWork,
    },
    {
      id: 4,
      date: 'Jul 2018 - Jul 2022',
      title: 'Bachelor of Technology in ECE',
      subtitle: 'Vellore Institute of Technology, India',
      description: ['Coursework: Data Structures and Algorithms, Object Oriented Programming, Machine Learning, Internet of Things, Data Analytics.'],
      type: typeSchool,
    },
  ];

  const toggleDescription = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null); // Collapse if the same item is clicked
    } else {
      setExpandedItem(id); // Expand the new item
    }
  };

  return (
    <div id="careers" className="vertical-timeline-container">
      <h2 className="text-5xl font-bold text-center my-career-header mb-8 mt-8">My Journey</h2>
      <VerticalTimeline>
  {timelineData.map((item) => (
    <VerticalTimelineElement
      key={item.id}
      date={item.date}
      iconStyle={{ background: item.type === 'work' ? '#00bfff' : '#e91e63' }}
      icon={item.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
      data-type={item.type} // Add data-type attribute for CSS styling
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
      
      {/* Display the description if the item is expanded */}
      {expandedItem === item.id && (
        <p 
          className="vertical-timeline-element-description" 
          dangerouslySetInnerHTML={{ __html: item.description.join(' ') }} // Use dangerouslySetInnerHTML to render HTML
        />
      )}

      {/* Button to toggle description */}
      <button 
        onClick={() => toggleDescription(item.id)} 
        className="cursor-pointer toggle-btn"
        style={{ 
          position: 'absolute', 
          bottom: '0px', 
          right: '10px', 
          fontSize: '14px', 
          padding: '5px 10px', 
          backgroundColor: 'transparent', 
          border: 'none', 
          color: '#7393B3' // Set the color of the text
        }}
      >
        {expandedItem === item.id ? "Hide Description" : "Show Description"}
      </button>

    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
    </div>
  );
};

export default Home;
