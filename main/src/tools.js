import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
// import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}

{/* Break Into 3 Section */}
<div className="flex flex-row items-center justify-between">
{/* Section 1 Logo Section*/}
<div className="flex-1 items-center">
  <img src={Logo} alt="" className="w-1/4" />
</div>
{/* Section 2 Navlink Section*/}
<div className="flex-1 flex flex-row items-center">
  <input type="text" name="search" id="" className='px-2 w-full py-2 bg-blue-50 rounded-l-lg'/>
  <button className='px-2 py-2 bg-blue-500 rounded-r-lg'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </button>
</div>
{/* Section 3 Auth Button Section*/}
<div className="flex-1 flex flex-row gap-4">
  <button className="px-6 py-2">Login</button>
  <button className="border border-blue-500 px-6 py-2 rounded-md">
    Register
  </button>
</div>
</div>