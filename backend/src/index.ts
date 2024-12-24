import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL:  string 
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  

  //zod validation needed, password hashing needed
  try{
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password, 
        name: body.name,
      }
    })
    return c.text('User created successfully');
  }catch(e){
    c.status(411);
    return c.text('Invalid input');
  }
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/blog', (c) => {
  return c.text('Hello Hono!')
})
export default app

