import type { InterviewModule } from './types';

export const dataEngineerModule: InterviewModule = {
  id: "data-engineer",
  title: "Data Engineer",
  branch: "ai_ds",
  category: "AI & Data Science",
  description: "Data Pipelines, ETL, Big Data, SQL, and Warehousing.",
  icon: "database",
  color: "bg-teal-50 border-teal-200 hover:border-teal-500",
  accent: "teal",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience building data pipelines and data infrastructure.",
      "Walk me through a large dataset or ETL pipeline you managed.",
      "How do you communicate data availability and schema changes to data analyst stakeholders?"
    ],
    techDomain: [
      "Explain the difference between ETL and ELT architectures and when to choose each.",
      "How does Apache Spark achieve fast distributed data processing compared to MapReduce?",
      "What is Star Schema vs Snowflake Schema in dimensional data modeling?",
      "How does Apache Kafka manage real-time streaming data partitions?",
      "How do you handle schema evolution and backfill historical data in a production warehouse?"
    ],
    managerial: [
      "Describe a data pipeline failure that broke downstream reporting dashboards and how you handled it."
    ]
  },

  skills: [
    {
      id: "pipelines",
      title: "Data Pipelines & ETL",
      questions: [
        "Explain the difference between an ETL pipeline and an ELT pipeline.",
        "How do you orchestrate complex data pipelines using tools like Apache Airflow?",
        "How do you handle schema evolution in a data warehouse?",
        "What strategies do you use for backfilling historical data into a new pipeline?",
        "Explain how you monitor data pipelines for failures or anomalies."
      ]
    },
    {
      id: "big-data",
      title: "Big Data & Distributed Computing",
      questions: [
        "Explain the concepts of data partitioning and clustering in Big Data systems.",
        "What is Apache Spark, and how does it process data faster than Hadoop MapReduce?",
        "Explain the difference between stream processing and batch processing.",
        "How do distributed file systems like HDFS manage large-scale data?",
        "What is the role of a message broker like Apache Kafka in a big data architecture?"
      ]
    },
    {
      id: "data-modeling",
      title: "Data Modeling & Warehousing",
      questions: [
        "What is a Star Schema and how does it differ from a Snowflake Schema?",
        "Explain the difference between a Data Warehouse and a Data Lake.",
        "What are Fact tables and Dimension tables in dimensional modeling?",
        "How do you optimize very slow analytical SQL queries in a warehouse?",
        "How would you ensure data quality and handle missing data in a continuous pipeline?"
      ]
    }
  ]
};
