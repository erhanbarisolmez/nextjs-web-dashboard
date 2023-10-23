

export default function MDXPage({source}: any) {
  const mdx = compile(source);
  return (
    <div dangerouslySetInnerHTML={{ __html: content } } />
  )
}


