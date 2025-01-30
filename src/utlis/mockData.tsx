import { Post, User, Comment } from "../types";
import { v4 as uuidv4 } from "uuid";

const generateMockUsers = (): User[] => [
  {
    id: uuidv4(),
    username: "Jalena Doe",
    avatar: "/images/author1.jpg",
  },
  {
    id: uuidv4(),
    username: "Jane Smith",
    avatar: "/images/author2.jpg",
  },
];

const mockUsers = generateMockUsers();

export const generateMockComments = (postId: string): Comment[] => {
  const rootComments: Comment[] = [
    {
      id: uuidv4(),
      content: `Voices Unheard is a platform for sharing personal stories. Whether you're overcoming challenges or celebrating victories, your voice matters.`,
      author: mockUsers[0],
      createdAt: new Date().toISOString(),
      replies: [
        {
          id: uuidv4(),
          content: `Reality TV’s original appeal came from offering viewers a peek behind the curtain of real life. But in 2024, social media has democratized this concept. Now, anyone with a smartphone can share their life, making it harder for reality TV shows to maintain the same level of intrigue.

`,
          author: mockUsers[1],
          createdAt: new Date().toISOString(),
          parentId: postId,
        },
      ],
    },
    {
      id: uuidv4(),
      content: `Encouraging people to share their stories and make an impact.`,
      author: mockUsers[1],
      createdAt: new Date().toISOString(),
    },
  ];

  return rootComments;
};

export const generateMockPosts = (): Post[] => [
  {
    id: uuidv4(),
    title: "How Tech Shapes the Future of Work in 2024",
    content:
      `<p><strong>Storytellers Corner</strong> is a space where stories of personal growth, hope, and resilience come together. In a fast-paced world, we offer a peaceful corner for reflection, connection, and understanding.</p>

<p>Our platform invites people to share their experiences—stories that matter. From overcoming hardships to celebrating victories, we aim to highlight the beauty in every journey. Whether you're seeking advice or simply looking for a relatable experience, Storytellers Corner provides the inspiration you need.</p>

<h2>What Makes Us Different?</h2>
<p>At Storytellers Corner, we believe that every story has the power to make a difference. It's not just about reading—it’s about joining a community of people who understand and support each other. Through:</p>

<ul>
  <li><strong>Personal Narratives:</strong> Real stories from real people, offering insights and encouragement.</li>
  <li><strong>Interactive Conversations:</strong> A space for dialogue where readers and storytellers can connect, share, and support.</li>
</ul>

<p><em>Storytelling isn’t just an art—it’s a way to heal, learn, and grow together.</em></p>

<blockquote>
  <p>"The best stories are those that speak to the heart and help us find the strength to keep going." </p>
  <cite>– Sarah Lee</cite>
</blockquote>
`,
    image: "/images/post1.webp",
    author: mockUsers[0],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },
  {
    id: uuidv4(),
    title: "Remote Work Trends in the Digital Age",
    content: `<p>In today’s ever-evolving world, storytelling has become a powerful tool for connection. <strong>Storytellers Hub</strong> provides a unique platform for individuals to share their stories.</p>
<p>Storytellers Hub is more than a typical content hub. It’s a dynamic space for meaningful conversations and personal stories that resonate with people on an emotional level. Whether you are looking for inspiration, comfort, or just a different perspective on life, Storytellers Hub offers a wide range of narratives to explore.</p>
<p>So, what makes Storytellers Hub stand out as the place for heartfelt reflections?</p>
<p>Storytellers Hub is more than a typical content hub. It’s a dynamic space for meaningful conversations and personal stories that resonate with people on an emotional level. Whether you are looking for inspiration, comfort, or just a different perspective on life, Storytellers Hub offers a wide range of narratives to explore.</p>
<p>With categories covering everything from love and relationships to personal development and lifestyle, it encourages readers to explore topics that touch on their emotions and experiences.</p>

<h2>Stories that Matter</h2>
<p>At the core of Storytellers Hub is a commitment to delivering stories that matter. Unlike traditional media platforms or news, Storytellers Hub invites readers into a world of deeply personal narratives. The website’s title, “Heartfelt Reflections: Stories of Love, Loss, and Growth,” signals this intent clearly, inviting you to journey through the most intimate aspects of human experience.</p>
<p>But we’re not just talking about written content — there are many ways that Storytellers Hub fosters connection and creativity. The different types of features include:</p>
<ul>
  <li>Author Profiles: Each contributor has a detailed profile, allowing readers to connect with their personal journey and social media presence.</li>
  <li>Experience Widgets: Contributors showcase their professional growth and skills, giving readers insight into their expertise.</li>
  <li>Technologies Section: Creators highlight the tools they use, such as Figma, Photoshop, and more, providing transparency in their creative processes.</li>
  <li>Creating Widget: A space where contributors can link to external projects and portfolios, expanding their reach beyond the platform.</li>
</ul>  

<h2>How do I create meaningful connections?</h2>
<p>When producing content for platforms like Storytellers Hub, it’s essential to focus not only on the quality of the writing but also on how it fosters engagement.</p>

<h2>How do I make authentic engagement?</h2>
<p>There are several ways to ensure your content builds these connections effectively. Here’s what they are:</p>

<h3><strong>1. Understand your audience</strong></h3>
<p>The first step to creating meaningful connections is understanding who your audience is. This involves researching their demographics, interests, preferences, and needs. Are they young professionals looking for lifestyle tips? Or perhaps seasoned entrepreneurs seeking business insights? Once you have a clear picture of who your readers are, you can start shaping content that resonates with their unique preferences.</p>
<p>For instance, knowing that your audience values emotional, personal stories can guide your content to be more reflective and heartfelt, making it easier for them to relate to the subject matter. Furthermore, understanding your audience allows you to tailor your tone and style to better connect with them.</p>

<h3><strong>2. Provide diverse perspectives</strong></h3>
<p>Before you create content that truly connects, everyone involved in the creation process needs to understand the importance of incorporating diverse perspectives. This includes things like:</p>
<ul>
  <li>Featuring contributors from different backgrounds</li>
  <li>Showcasing a variety of life experiences</li>
  <li>Including global viewpoints</li>
  <li>Highlighting diverse professional expertise</li>
</ul>
<p>Going through this checklist will ensure that your content covers multiple angles, making it richer and more inclusive. This approach prevents your content from feeling one-dimensional or narrowly focused—allowing it to resonate with a broader and more diverse audience.</p>
<p>When diverse perspectives are incorporated, readers are more likely to see their own experiences reflected, creating a stronger emotional connection with the content.</p>

<blockquote>
  <p>Stories are the threads that bind us; through them, we understand each other, grow, and heal.</p>
  <cite>JOHN Smith</cite>
</blockquote>

<p>By showcasing different perspectives, you encourage readers from all walks of life to engage with your content, feel represented, and contribute their own viewpoints. This ultimately enhances the value of the platform, transforming it into a more inclusive and dynamic community.</p>
`,
    image: "/images/post2.webp",
    author: mockUsers[1],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },
  {
    id: uuidv4(),
    title: "Startups Disrupting the Sports Industry with Innovative Tech",
    content: `<p>In a world that thrives on constant change, storytelling remains an anchor that connects us all. <strong>The Storytellers Network</strong> provides a space for individuals to share their journeys, lessons, and reflections.</p>

<p>The Storytellers Network goes beyond just being a place for stories—it's an interactive community where individuals can spark conversations that resonate on a deeply human level. Whether you’re searching for hope, understanding, or simply a moment of inspiration, this platform offers a multitude of stories to help you feel less alone in your experiences.</p>

<h2>Why Choose The Storytellers Network?</h2>
<p>The Storytellers Network isn’t just about reading—it’s about engagement and interaction. The platform is designed to make your stories impactful and help you connect with others who understand your struggles, victories, and aspirations. Here’s what makes it stand out:</p>

<p>With categories ranging from personal struggles and mental health to love, family, and even career journeys, the platform encourages readers to dive into a wide array of relatable experiences, offering comfort and encouragement along the way.</p>

<h2>Stories that Inspire Change</h2>
<p>At the core of The Storytellers Network is a passion for sharing stories that inspire growth and change. Each narrative shared aims to challenge, motivate, or offer new perspectives on life’s greatest obstacles. The tagline, "Transformative Tales: Stories of Resilience, Change, and Strength," reflects this mission clearly.</p>

<p>The platform doesn’t stop at just sharing written content. It fosters creative expression in multiple forms, including:</p>

<ul>
  <li><strong>Storyteller Journeys:</strong> Each contributor’s personal journey is mapped out in detail, providing readers with a full picture of their experience, from where they started to where they are now.</li>
  <li><strong>Interactive Feedback:</strong> Readers are encouraged to comment, share their own stories, and ask questions, creating a dynamic two-way communication channel between creators and the audience.</li>
  <li><strong>Resource Hub:</strong> Contributors share tools, books, articles, and resources that helped them through their journeys, offering practical advice for readers facing similar challenges.</li>
  <li><strong>Collaborative Projects:</strong> A unique feature that enables contributors to link up with others for group projects, workshops, or creative collaborations.</li>
</ul>

<h2>How to Connect Authentically</h2>
<p>To create real connections with your audience, it’s important to go beyond the words you write and think about the kind of impact you want to have.</p>

<h3>How Can I Foster Genuine Connections?</h3>
<p>Here are a few strategies for building trust and engaging authentically with your readers:</p>

<h3><strong>1. Build Empathy</strong></h3>
<p>To truly connect with your audience, you need to put yourself in their shoes. What are they struggling with? What moments of joy or hardship have they experienced? Understanding your audience's emotions will allow you to craft content that speaks directly to them, whether it’s through words, stories, or advice.</p>

<h3><strong>2. Share Vulnerability</strong></h3>
<p>Vulnerability is key to connection. By sharing your struggles, setbacks, and moments of doubt, you invite readers to open up and share their own experiences. This builds an environment of trust and creates an authentic dialogue between you and your audience.</p>

<h3><strong>3. Focus on Real-Life Impact</strong></h3>
<p>While inspiration is valuable, your content should also offer practical, actionable advice. Consider providing your readers with real tools and steps that helped you overcome the challenges you faced. This will add depth to your stories, offering more than just motivation—it provides direction for growth and change.</p>

<blockquote>
  <p>"The power of a shared story lies in its ability to heal and inspire. When we speak our truth, we give others permission to do the same." </p>
  <cite>– Maya Johnson</cite>
</blockquote>

<p>By embracing vulnerability, empathy, and actionable insights, your content becomes a powerful tool for fostering deeper, more meaningful connections with others.</p>
`,
    image: "/images/post3.webp",
    author: mockUsers[1],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },
  {
    id: uuidv4(),
    title: "Travel Trends in 2024: Virtual Tours and Immersive Experiences",
    content: `<p>In a rapidly changing world, the power of storytelling to foster connection cannot be overstated. <strong>Storytellers Collective</strong> offers a platform for individuals to share authentic, impactful stories.</p>

<p>The Storytellers Collective isn't just another content site; it's a vibrant space where personal narratives come to life. It fosters meaningful conversations that resonate deeply with readers. Whether you seek motivation, solace, or a fresh viewpoint, the Collective offers a diverse range of stories to explore.</p>

<p>But what truly makes Storytellers Collective stand out in the realm of personal storytelling?</p>

<p>With an emphasis on deep emotional connections, the site presents categories spanning everything from mental health to overcoming adversity, encouraging readers to reflect on their own experiences.</p>

<h2>Impactful Narratives</h2>
<p>At the heart of the <em>Storytellers Collective</em> is a focus on delivering stories that leave a lasting impact. Unlike traditional media outlets, the Collective invites its readers into raw, personal journeys. The site's tagline, "Voices of Triumph: Stories of Strength, Hope, and Transformation," exemplifies this commitment.</p>

<p>It's more than just written word—Storytellers Collective incorporates various features to enhance creativity and connection. Here are a few key elements:</p>

<ul>
  <li><strong>Storyteller Profiles:</strong> Each contributor’s profile offers insights into their journey, including links to social media and personal websites.</li>
  <li><strong>Growth Metrics:</strong> Contributors display their professional milestones, skills, and achievements, giving readers a deeper understanding of their development.</li>
  <li><strong>Tool Showcase:</strong> A section highlighting the creative tools used by contributors, from design software to writing apps, offering a transparent view into their process.</li>
  <li><strong>External Collaborations:</strong> A feature that allows contributors to link to personal projects and collaborations outside the platform, expanding their creative footprint.</li>
</ul>

<h2>Building Authentic Connections</h2>
<p>Creating meaningful content on platforms like Storytellers Collective requires more than just good writing; it’s about fostering engagement that feels genuine and real.</p>

<h3>How to Create Meaningful Connections?</h3>
<p>Here are a few strategies for ensuring your content fosters authentic engagement:</p>

<h3><strong>1. Know Your Audience</strong></h3>
<p>The foundation of building meaningful connections begins with understanding your audience. This means researching their interests, preferences, and life experiences. Are they individuals seeking inspiration for personal growth? Or perhaps they’re navigating grief and looking for comfort? Tailoring content based on this insight ensures a stronger, more resonant connection.</p>

<h3><strong>2. Embrace Diversity</strong></h3>
<p>True connection thrives when different perspectives come together. Incorporating diverse viewpoints is key to enriching your content. Here are a few ways to do this:</p>

<ul>
  <li>Engage storytellers from various cultural and socioeconomic backgrounds</li>
  <li>Highlight different personal experiences and challenges</li>
  <li>Incorporate global perspectives on universal themes</li>
  <li>Celebrate different professional skills and journeys</li>
</ul>

<p>By embracing diversity, you ensure your content appeals to a wider audience, creating more opportunities for readers to relate to and engage with your work.</p>

<blockquote>
  <p>"Our stories are a reflection of who we are. Through them, we learn to understand ourselves and others." </p>
  <cite>– Emma Reyes</cite>
</blockquote>

<p>When diverse voices are shared, readers from all walks of life feel seen and heard, strengthening the community and fostering deeper, more meaningful engagement.</p>
`,
    image: "/images/post4.webp",
    author: mockUsers[1],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },

]


export const generateMockFeaturesPosts = (): Post[] => [
  {
    id: uuidv4(),
    title: "The Impact of Automation on Business Management Efficiency",
    content:
      `<p><strong>Voices Unheard</strong> is a platform where untold stories find a voice. Here, we celebrate the beauty of diverse experiences and the power of storytelling to inspire change.</p>

<p>Every person has a story worth sharing, and we provide a safe space for individuals to express their journeys—whether they’re about triumphs, challenges, or moments of reflection. At Voices Unheard, we believe that sharing these stories helps us grow, connect, and heal.</p>

<h2>Why Share Your Story?</h2>
<p>Storytelling is a powerful tool for understanding and connection. By sharing your unique experiences, you give others the courage to do the same. Here’s how we do it:</p>

<ul>
  <li><strong>Personal Stories:</strong> A collection of narratives that touch hearts and change perspectives.</li>
  <li><strong>Community Engagement:</strong> An interactive space where readers and writers can engage, reflect, and learn from one another.</li>
</ul>

<p><em>Your story could be the one that inspires someone else today.</em></p>

<blockquote>
  <p>"Stories have the power to unite us, to show us we are not alone." </p>
  <cite>– Tom Williams</cite>
</blockquote>
`,
    image: "/images/featurepost1.webp",
    author: mockUsers[0],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },
  {
    id: uuidv4(),
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    content: `<p><strong>Voices Unheard</strong> is a platform where untold stories find a voice. Here, we celebrate the beauty of diverse experiences and the power of storytelling to inspire change.</p>

<p>Every person has a story worth sharing, and we provide a safe space for individuals to express their journeys—whether they’re about triumphs, challenges, or moments of reflection. At Voices Unheard, we believe that sharing these stories helps us grow, connect, and heal.</p>

<h2>Why Share Your Story?</h2>
<p>Storytelling is a powerful tool for understanding and connection. By sharing your unique experiences, you give others the courage to do the same. Here’s how we do it:</p>

<ul>
  <li><strong>Personal Stories:</strong> A collection of narratives that touch hearts and change perspectives.</li>
  <li><strong>Community Engagement:</strong> An interactive space where readers and writers can engage, reflect, and learn from one another.</li>
</ul>

<p><em>Your story could be the one that inspires someone else today.</em></p>

<blockquote>
  <p>"Stories have the power to unite us, to show us we are not alone." </p>
  <cite>– Tom Williams</cite>
</blockquote>
`,
    image: "/images/featurepost2.webp",
    author: mockUsers[1],
    createdAt: new Date().toISOString(),
    comments: generateMockComments(uuidv4()),
  },
];