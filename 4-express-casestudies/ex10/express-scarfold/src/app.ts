import express from 'express';
import { InMemoryCourseRepository } from './repositories/InMemoryCourseRepository';
import { CourseService } from './services/CourseService';

const app = express();
app.use(express.json());

const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);

app.post('/courses/:id/enroll', async (req, res) => {
  try {
    const result = await courseService.enroll(req.params.id, req.body.studentId);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/students/:id/courses', async (req, res) => {
  const courses = await courseService.getStudentCourses(req.params.id);
  res.json(courses);
});

app.delete('/courses/:id', async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
