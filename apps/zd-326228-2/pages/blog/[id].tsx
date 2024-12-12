import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: '456'
        }
      }
    ]
  }
}

export const getStaticProps = ((context) => {
  return {
    props: {
      id: context.params.id,
      preview: context.draftMode || false
    }
  }
}) satisfies GetStaticProps<{
  id: string | string[]
  preview: boolean
}>

export default function(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <p>id: {props.id}</p>
      <p>preview: {JSON.stringify(props.preview)}</p>
    </>
  )
}