import { SelectLanguajeHook } from '../hooks'
export default function Blog(): JSX.Element {
  let { currentLanguaje: texts } = SelectLanguajeHook()

  return (
    <main className="flex flex-col px-4 justify-center items-center w-100 h-full">
      <h1 className="text-6xl text-secondary dark:text-detail mt-8 mb-4">
        {texts.labels.blogTitle}
      </h1>
      <p className="w-6/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        voluptates nisi earum consequuntur deleniti, ab qui delectus, ex odio
        accusamus facilis vero aliquid maxime ut animi corrupti voluptate. Hic,
        nemo!
      </p>
    </main>
  )
}
