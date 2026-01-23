// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/01-aggregation-framework/

/*
Problem Statement:

MovieFlix needs to analyze huge volumes of viewing data for dashboards and recommendations.

• Need to compute top genres, average watch times, and revenue by region.
• Want to perform these analyses efficiently within MongoDB.

The challenge: Use the Aggregation Framework (`$match`, `$group`, `$project`, etc.) to build multi-stage pipelines that summarize and transform large datasets.


Challenge (Interactive - "Your Turn"):

1. Write an aggregation pipeline to find average rating per genre in 2024, including only genres with >10,000 total views. Output should show genre, average rating (rounded), and total views.
*/