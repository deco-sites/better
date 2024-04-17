import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div class="bg-white">
      <div class="relative isolate">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5C527F] to-[#1D2D50] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div class="flex">
              <div class="relative font-semibold gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-[#1D2D50] ring-1 ring-[#1D2D50]/20">O assistente de compras da sua marca <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4 -mt-1 inline text-[#1D2D50]/70">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                </svg>
              </div>
            </div>
            <h1 class="mt-5 max-w-lg text-4xl font-bold font-serif tracking-tight text-[#1D2D50] sm:text-5xl">Experiências de compra incríveis com <span class="bg-clip-text text-transparent" style="background-color: rgb(65, 88, 208); background-image: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);">o poder da IA</span>
            </h1>
            <p class="mt-8 text-lg leading-8 text-[#2c2c34]">Ofereça uma experiência de compras personalizada, fluida e envolvente com a nossa inteligência artificial. A ferramenta onde cada conversa é uma oportunidade para encantar, descobrir e converter.</p>
            <div class="mt-8 flex items-center gap-x-6">
              <a href="/pt-br/get-started" class="rounded-md shadow-sm px-3.5 py-2.5 text-sm font-semibold bg-[#7A40D9] text-white hover:bg-[#6A30B9] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Comece agora</a>
              <a aria-current="page" href="/pt-br#solutions" class="router-link-active router-link-exact-active text-sm font-semibold leading-6 text-[#2c2c34]">Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div class="mx-auto w-[22.875rem] h-[33rem] max-w-full shadow-2xl shadow-[#5C527F]/50 bg-white rounded-2xl overflow-hidden ring-1 ring-slate-600/10 lg:mr-4">
              <div class="w-full h-full bg-gradient-to-b from-gray-50/20 to-slate-50/50 pointer-events-none select-none text-black touch-none">
                <div class="flex flex-col h-full relative">
                  <div class="header-wrap sticky top-0 z-40 transition-all shadow-md">
                    <div class="flex justify-between p-5 w-full bg-white">
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-8 w-8 mr-3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"></path>
                        </svg>
                        <div>
                          <div class="font-medium text-base leading-4 flex items-center text-black-900">
                            <span class="mr-1.5">abcd store</span>
                            <div class="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <div class="text-xs mt-1 leading-3 text-black-700">Assistente de compras com inteligência artificial</div>
                        </div>
                      </div>
                      <div class="flex items-center"></div>
                    </div>
                  </div>
                  <div class="flex flex-col flex-1 overflow-hidden">
                    <div class="flex flex-1 overflow-auto">
                      <div class="flex flex-col flex-1 overflow-y-auto">
                        <div class="flex-1 p-5 flex flex-col space-y-3 w-full">
                          <div>
                            <div class="max-w-[90%] space-y-1 inline-block">
                              <div class="px-3 py-2.5 rounded-r-lg rounded-bl-lg shadow-lg shadow-gray-400/5 chat-message-outgoing">
                                <p class="text-md whitespace-pre-line">Olá! Como posso te ajudar hoje? ✨</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="px-5">
                      <div class="shadow-sm mb-1 relative chat-footer">
                        <div>
                          <form class="relative flex w-full flex-grow flex-col rounded-md bg-white chat-input touch-none chat-input-focused">
                            <div></div>
                            <textarea class="m-0 w-full resize-none border-0 bg-transparent text-black text-base xl:text-md py-3 pl-4 pr-10 focus:ring-0 focus-visible:ring-0" placeholder="" rows="1" maxlength="200" disabled="" aria-label="Campo para usuário enviar mensagem" style="resize: none; max-height: 400px; min-height: 50px; overflow: hidden; height: 50px; bottom: 50px;"></textarea>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-0 py-2 pb-2.5 flex justify-center items-center">
                    <div class="text-xs p-1.5 -m-1.5 text-gray-800"> powered by <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.75 76.5" class="w-[87.7px] h-[23px] -mt-0.5 inline fill-[#5C527F]">
                        <path d="M18.957 22.914C17.25 37.348 15.863 38.73 1.434 40.441c.027 0 .058.004.09.008 14.347 1.703 15.73 3.114 17.433 17.516 1.707-14.434 3.094-15.817 17.527-17.524-14.433-1.71-15.82-3.093-17.527-17.527Zm0 0"></path>
                        <path d="M32.426 18.246c-.836 7.063-1.516 7.742-8.578 8.578.015 0 .03 0 .043.004 7.023.832 7.699 1.524 8.535 8.57.836-7.062 1.511-7.738 8.574-8.574-7.063-.836-7.738-1.515-8.574-8.578Zm0 0"></path>
                        <path d="M72.882 41.71c0 1.668-.312 3.23-.937 4.688a11.97 11.97 0 0 1-2.547 3.796c-1.063 1.075-2.336 1.918-3.813 2.532a12.3 12.3 0 0 1-4.703.906c-1.156 0-2.289-.164-3.39-.484a11.727 11.727 0 0 1-3.032-1.391v1.562H48.43V22.085l6.11-1.344v11.157a10.694 10.694 0 0 1 3.062-1.579 10.751 10.751 0 0 1 3.453-.562c1.645 0 3.187.312 4.625.937a11.917 11.917 0 0 1 3.766 2.547 11.656 11.656 0 0 1 2.515 3.797c.614 1.461.922 3.016.922 4.672Zm-12.797-6.734a8.405 8.405 0 0 0-3.094.562 6.928 6.928 0 0 0-2.453 1.625v9.156c.657.649 1.47 1.168 2.438 1.563a8.303 8.303 0 0 0 3.11.578c1.894 0 3.5-.644 4.812-1.937 1.312-1.301 1.968-2.907 1.968-4.813 0-1.894-.664-3.488-1.984-4.781-1.324-1.301-2.922-1.953-4.797-1.953ZM96.579 50.413c-1.43 1.168-2.899 2.024-4.407 2.563-1.5.53-3.171.797-5.015.797-1.75 0-3.39-.313-4.922-.938-1.531-.625-2.86-1.473-3.984-2.547a11.545 11.545 0 0 1-2.625-3.812c-.637-1.477-.954-3.067-.954-4.766 0-1.656.301-3.219.907-4.687a12.035 12.035 0 0 1 2.515-3.844 11.66 11.66 0 0 1 3.813-2.578 11.984 11.984 0 0 1 4.719-.938c1.632 0 3.156.324 4.562.969a11.373 11.373 0 0 1 3.672 2.61c1.031 1.093 1.832 2.413 2.406 3.952.582 1.532.875 3.188.875 4.97v1.609H80.83c.414 1.46 1.218 2.636 2.406 3.53 1.187.888 2.582 1.329 4.187 1.329 1.02 0 1.973-.16 2.86-.484.894-.332 1.656-.797 2.281-1.391ZM86.5 34.71c-1.407 0-2.618.43-3.625 1.281-1.012.844-1.711 1.98-2.094 3.407h11.375c-.387-1.364-1.094-2.485-2.125-3.36-1.024-.883-2.2-1.328-3.531-1.328ZM104.16 46.757V35.194h-4.78V30.07h4.78v-5.937l6.11-1.375v7.312h6.61v5.125h-6.61v10.313c0 1.105.238 1.883.719 2.328.476.45 1.312.672 2.5.672.562 0 1.093-.035 1.593-.11a9.521 9.521 0 0 0 1.657-.437v5c-.649.211-1.434.379-2.36.516-.93.133-1.715.203-2.36.203-2.593 0-4.554-.586-5.874-1.766-1.324-1.176-1.985-2.894-1.985-5.156ZM122.186 46.757V35.194h-4.781V30.07h4.78v-5.937l6.11-1.375v7.312h6.61v5.125h-6.61v10.313c0 1.105.238 1.883.719 2.328.477.45 1.312.672 2.5.672.562 0 1.094-.035 1.594-.11a9.521 9.521 0 0 0 1.656-.437v5c-.648.211-1.434.379-2.36.516-.93.133-1.714.203-2.359.203-2.594 0-4.554-.586-5.875-1.766-1.324-1.176-1.984-2.894-1.984-5.156ZM157.883 50.413c-1.43 1.168-2.898 2.024-4.406 2.563-1.5.53-3.172.797-5.016.797-1.75 0-3.39-.313-4.922-.938-1.53-.625-2.859-1.473-3.984-2.547a11.545 11.545 0 0 1-2.625-3.812c-.637-1.477-.953-3.067-.953-4.766 0-1.656.3-3.219.906-4.687a12.035 12.035 0 0 1 2.516-3.844 11.66 11.66 0 0 1 3.812-2.578 11.984 11.984 0 0 1 4.72-.938c1.632 0 3.155.324 4.562.969a11.373 11.373 0 0 1 3.671 2.61c1.032 1.093 1.832 2.413 2.407 3.952.582 1.532.875 3.188.875 4.97v1.609h-17.313c.414 1.46 1.219 2.636 2.406 3.53 1.188.888 2.582 1.329 4.188 1.329 1.02 0 1.973-.16 2.86-.484.894-.332 1.656-.797 2.28-1.391ZM147.805 34.71c-1.406 0-2.617.43-3.625 1.281-1.012.844-1.71 1.98-2.094 3.407h11.375c-.386-1.364-1.093-2.485-2.125-3.36-1.023-.883-2.199-1.328-3.53-1.328ZM162.293 53.32V30.07h6.11v2.546c.75-1.007 1.648-1.773 2.702-2.297 1.063-.52 2.227-.78 3.5-.78.602.03 1.102.085 1.5.155.407.075.754.2 1.047.375v5.36a6.53 6.53 0 0 0-1.468-.469 8.822 8.822 0 0 0-1.657-.156 6.31 6.31 0 0 0-3.28.89c-.993.594-1.774 1.461-2.345 2.594V53.32Zm0 0"></path>
                        <path d="m180.73 50.241 2.016-2.14a11.093 11.093 0 0 0 3.406 2.203c1.27.523 2.555.781 3.86.781 1.788 0 3.25-.367 4.374-1.11 1.133-.75 1.704-1.718 1.704-2.906 0-.945-.34-1.695-1.016-2.25-.668-.55-1.715-.93-3.14-1.14l-3.876-.531c-2.242-.332-3.902-.993-4.984-1.985-1.086-1-1.625-2.347-1.625-4.047 0-1.875.785-3.425 2.36-4.656 1.581-1.238 3.593-1.86 6.03-1.86 1.602 0 3.126.243 4.563.72 1.445.48 2.86 1.226 4.234 2.234l-1.75 2.234c-1.25-.832-2.464-1.457-3.64-1.875a10.69 10.69 0 0 0-3.594-.625c-1.512 0-2.75.344-3.719 1.031-.968.68-1.453 1.57-1.453 2.672 0 .95.328 1.684.985 2.203.656.524 1.71.887 3.171 1.094l3.875.531c2.227.305 3.899.97 5.016 2 1.125 1.024 1.688 2.383 1.688 4.079 0 .949-.235 1.851-.704 2.703a6.773 6.773 0 0 1-1.921 2.187c-.813.606-1.774 1.078-2.875 1.422-1.094.344-2.282.516-3.563.516-1.844 0-3.578-.305-5.203-.907-1.617-.613-3.024-1.472-4.219-2.578ZM202.018 53.32V22.084l3.297-.766v12.282a8.555 8.555 0 0 1 3.078-2.297c1.196-.52 2.524-.781 3.985-.781 2.52 0 4.582.804 6.187 2.406 1.614 1.605 2.422 3.687 2.422 6.25v14.14h-3.265V39.835c0-1.957-.57-3.516-1.704-4.672-1.125-1.164-2.64-1.75-4.546-1.75-1.336 0-2.532.297-3.594.89-1.055.595-1.906 1.446-2.563 2.548v16.468ZM224.59 42.116c0-1.601.297-3.117.89-4.547.594-1.425 1.407-2.66 2.438-3.703a11.289 11.289 0 0 1 3.64-2.453 11.248 11.248 0 0 1 4.454-.89c1.582 0 3.062.296 4.437.89a11.238 11.238 0 0 1 3.61 2.453c1.03 1.043 1.843 2.278 2.437 3.703.602 1.43.906 2.946.906 4.547 0 1.637-.304 3.168-.906 4.594-.594 1.43-1.406 2.664-2.437 3.703a11.343 11.343 0 0 1-3.61 2.469c-1.375.594-2.855.89-4.437.89-1.574 0-3.059-.296-4.453-.89a11.393 11.393 0 0 1-3.641-2.469c-1.031-1.039-1.844-2.273-2.437-3.703-.594-1.426-.891-2.957-.891-4.594Zm11.422 8.703a7.636 7.636 0 0 0 3.187-.671 7.931 7.931 0 0 0 2.594-1.844c.727-.79 1.3-1.711 1.719-2.766a9.342 9.342 0 0 0 .625-3.422 9.23 9.23 0 0 0-.625-3.406 8.524 8.524 0 0 0-1.719-2.75 8.125 8.125 0 0 0-2.594-1.828 7.697 7.697 0 0 0-3.187-.672 7.75 7.75 0 0 0-3.188.672 8.082 8.082 0 0 0-2.593 1.828 9.056 9.056 0 0 0-1.735 2.75c-.43 1.055-.64 2.188-.64 3.406 0 1.22.207 2.36.625 3.422a8.718 8.718 0 0 0 1.718 2.766 7.834 7.834 0 0 0 2.61 1.844 7.787 7.787 0 0 0 3.203.671ZM251.098 62.46v-31.5h3.25v2.406a9.561 9.561 0 0 1 3.281-2.062 11.067 11.067 0 0 1 3.953-.703c1.57 0 3.04.304 4.406.906a11.142 11.142 0 0 1 3.579 2.437c1.007 1.024 1.804 2.243 2.39 3.657.582 1.406.875 2.914.875 4.515 0 1.606-.293 3.125-.875 4.563-.586 1.43-1.383 2.656-2.39 3.687-1.012 1.024-2.211 1.828-3.594 2.422-1.375.594-2.856.89-4.438.89-1.304 0-2.57-.226-3.797-.671a11.255 11.255 0 0 1-3.343-1.922V62.46Zm10.172-28.953c-1.399 0-2.7.277-3.907.828-1.199.555-2.187 1.32-2.968 2.297v11.062c.78.961 1.78 1.715 3 2.266a9.405 9.405 0 0 0 3.875.813c2.351 0 4.32-.82 5.906-2.47 1.594-1.655 2.39-3.702 2.39-6.14a8.792 8.792 0 0 0-.656-3.406 8.598 8.598 0 0 0-1.75-2.75 8.24 8.24 0 0 0-2.64-1.828 7.976 7.976 0 0 0-3.25-.672Zm0 0"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5C527F] to-[#1D2D50] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div>
        </div>
      </div>
      <div id="solutions" class="py-10 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-[#7A40D9]">Conversational Commerce</h2>
            <p class="mt-2 text-3xl font-bold font-serif tracking-tight text-[#1D2D50] sm:text-4xl">Revolucione suas vendas com <br>seu assistente IA </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Descubra uma nova era de engajamento do cliente, onde cada interação é potencializada por uma IA que entende e antecipa as necessidades dos clientes. Garanta uma jornada de compra intuitiva e personalizada.</p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl sm:mt-14 lg:mt-16 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                    </svg>
                  </div> Respostas instantâneas
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Garanta que cada interação do cliente seja um passo positivo na jornada, não importa o horário ou o canal.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                    </svg>
                  </div> Entenda além das palavras
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Vá além do óbvio. Cada palavra é entendida, cada intenção é reconhecida de forma única e cada resposta é uma solução.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"></path>
                    </svg>
                  </div> Eleve a personalização
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Transforme cada clique em uma conversa única. Garanta uma jornada de compras que se molda perfeitamente às preferências do cliente.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path>
                    </svg>
                  </div> Valorize seus produtos
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Dê a cada produto o palco que merece com informações detalhadas, que falam diretamente às necessidades e desejos dos clientes.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
                    </svg>
                  </div> Maximize suas conversões
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Direcione seus clientes por uma jornada que além de engajar, também impulsiona suas vendas.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5c527f]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                    </svg>
                  </div> Explore insights preciosos
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Explore um universo de insights profundos sobre as preferências e comportamentos dos seus clientes.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div id="features" class="py-10 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-base font-semibold leading-7 text-[#7A40D9]">Funcionalidades para inovar</h2>
            <p class="mt-2 text-3xl font-bold font-serif tracking-tight text-[#1D2D50] sm:text-4xl">Transforme a interação com seus clientes</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Abra as portas para uma nova era de interações com o cliente, funcionalidades projetadas para criar uma experiência de assistente de compras sem precedentes.</p>
          </div>
        </div>
        <div class="relative overflow-hidden pt-10">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <img src="https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_2432,h_1488/betterweb/images/app_demo.png" width="2586" height="1582" alt="App screenshot" data-nuxt-img="" sizes="(max-width: 640px) 350px, (max-width: 768px) 592px, (max-width: 1024px) 720px, (max-width: 1280px) 960px, (max-width: 1536px) 1216px, 1216px" srcset="https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_350,h_214/betterweb/images/app_demo.png 350w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_592,h_362/betterweb/images/app_demo.png 592w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_700,h_428/betterweb/images/app_demo.png 700w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_720,h_440/betterweb/images/app_demo.png 720w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_960,h_587/betterweb/images/app_demo.png 960w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_1184,h_724/betterweb/images/app_demo.png 1184w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_1216,h_744/betterweb/images/app_demo.png 1216w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_1440,h_880/betterweb/images/app_demo.png 1440w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_1920,h_1174/betterweb/images/app_demo.png 1920w, https://res.cloudinary.com/bettershop/image/upload/f_auto,q_auto,w_2432,h_1488/betterweb/images/app_demo.png 2432w" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10">
            <div class="relative" aria-hidden="true">
              <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10 max-w-7xl px-6 sm:mt-14 lg:mt-16 lg:px-8">
          <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                </svg> Modelo personalizado.
              </dt>
              <dd class="inline">Ajuste os fluxos, alinhe-os com sua estratégia.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path>
                </svg> Seus produtos e dados.
              </dt>
              <dd class="inline">Conecte com facilidade através de nossas integrações.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path fill-rule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z" clip-rule="evenodd"></path>
                </svg> Widget personalizado.
              </dt>
              <dd class="inline">Instale o chat no seu site e inicie conversas sem esforço.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z"></path>
                  <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z"></path>
                </svg> Histórico de conversas.
              </dt>
              <dd class="inline">Analise as conversas para evoluir a experiência do cliente.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path fill-rule="evenodd" d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z" clip-rule="evenodd"></path>
                </svg> CRM inteligente.
              </dt>
              <dd class="inline">Perfil do cliente para recomendações personalizadas.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-[#5c527f]">
                  <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd"></path>
                </svg> Insights Poderosos.
              </dt>
              <dd class="inline">Decifre tendências e tome decisões baseadas em dados.</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-[#f3edeb] mt-8 sm:mt-10">
        <div class="mx-auto max-w-7xl px-6 py-10 sm:py-20 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h3 class="text-2xl font-bold tracking-tight text-[#2c2c34] sm:text-3xl">Pronto para encantar? <br> Transforme as experiências de compra da sua marca </h3>
          <div class="mt-6 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a href="/pt-br/get-started" class="rounded-md shadow-sm px-3.5 py-2.5 text-sm font-semibold bg-[#7A40D9] text-white hover:bg-[#6A30B9] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Comece agora</a>
            <a href="/pt-br/contato" class="text-sm font-semibold leading-6 text-[#2c2c34]">Fale com a gente <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
