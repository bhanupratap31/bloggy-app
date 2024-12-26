import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL:  string 
        JWT_SECRET: string
        }
}>();

blogRouter.use("/*", (c, next) => {
    //extrace the user id 
    //and pass it down to the route handler for author id
    next();
});

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: 1
        }
    });
    
    return c.json({
        id: blog.id
    });
  })
  
  blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        }, 
        data: {
            title: body.title,
            content: body.content
        }
    });
    
    return c.json({
        id: blog.id
    });
  })
  
  blogRouter.get('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())


    try {
        const blog = await prisma.blog.findFirst({
            where:{
                id: body.id
            }
        });
        
        return c.json({
            blog
        });
    }catch(err){ 
        c.status(404);
        return c.json({
            message: 'Blog not found'
        });
    }
  })
  
  blogRouter.get('/bulk', (c) => {
    return c.text('Hello Hono!')
  })