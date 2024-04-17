import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

type Type = "dark" | "light";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  primary?: boolean;
}

export interface Nav {
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-4 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.5rem]") +
  "peer-checked:translate-y-[0.5rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.25rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") + 
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  navigation = {
    links: [
      { label: "Soluções", url: "/" },
      { label: "Funcionalidades", url: "/" },
      { label: "Integrações", url: "/" },
      { label: "Preços", url: "/" },
    ],
    buttons: [
      { id: "login", href: "https://app.bettershop.ai/", text: "Entrar", primary: false },
      { id: "get-started", href: "/", text: "Comece agora", primary: true },
    ],
  },
}: Nav) {
  return (
    <header class="sticky z-10 inset-0 z-50 border-b border-gray-200/60 bg-white/60 backdrop-blur-lg">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-2.5 sm:gap-x-6 py-4 px-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <div>
            <a aria-current="page" href="/" class="router-link-active router-link-exact-active -m-1.5 p-1.5">
              <span class="sr-only">bettershop</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.75 76.5" class="w-[153px] h-[40.11px] inline fill-[#5C527F]">
                <path d="M18.957 22.914C17.25 37.348 15.863 38.73 1.434 40.441c.027 0 .058.004.09.008 14.347 1.703 15.73 3.114 17.433 17.516 1.707-14.434 3.094-15.817 17.527-17.524-14.433-1.71-15.82-3.093-17.527-17.527Zm0 0"></path>
                <path d="M32.426 18.246c-.836 7.063-1.516 7.742-8.578 8.578.015 0 .03 0 .043.004 7.023.832 7.699 1.524 8.535 8.57.836-7.062 1.511-7.738 8.574-8.574-7.063-.836-7.738-1.515-8.574-8.578Zm0 0"></path>
                <path d="M72.882 41.71c0 1.668-.312 3.23-.937 4.688a11.97 11.97 0 0 1-2.547 3.796c-1.063 1.075-2.336 1.918-3.813 2.532a12.3 12.3 0 0 1-4.703.906c-1.156 0-2.289-.164-3.39-.484a11.727 11.727 0 0 1-3.032-1.391v1.562H48.43V22.085l6.11-1.344v11.157a10.694 10.694 0 0 1 3.062-1.579 10.751 10.751 0 0 1 3.453-.562c1.645 0 3.187.312 4.625.937a11.917 11.917 0 0 1 3.766 2.547 11.656 11.656 0 0 1 2.515 3.797c.614 1.461.922 3.016.922 4.672Zm-12.797-6.734a8.405 8.405 0 0 0-3.094.562 6.928 6.928 0 0 0-2.453 1.625v9.156c.657.649 1.47 1.168 2.438 1.563a8.303 8.303 0 0 0 3.11.578c1.894 0 3.5-.644 4.812-1.937 1.312-1.301 1.968-2.907 1.968-4.813 0-1.894-.664-3.488-1.984-4.781-1.324-1.301-2.922-1.953-4.797-1.953ZM96.579 50.413c-1.43 1.168-2.899 2.024-4.407 2.563-1.5.53-3.171.797-5.015.797-1.75 0-3.39-.313-4.922-.938-1.531-.625-2.86-1.473-3.984-2.547a11.545 11.545 0 0 1-2.625-3.812c-.637-1.477-.954-3.067-.954-4.766 0-1.656.301-3.219.907-4.687a12.035 12.035 0 0 1 2.515-3.844 11.66 11.66 0 0 1 3.813-2.578 11.984 11.984 0 0 1 4.719-.938c1.632 0 3.156.324 4.562.969a11.373 11.373 0 0 1 3.672 2.61c1.031 1.093 1.832 2.413 2.406 3.952.582 1.532.875 3.188.875 4.97v1.609H80.83c.414 1.46 1.218 2.636 2.406 3.53 1.187.888 2.582 1.329 4.187 1.329 1.02 0 1.973-.16 2.86-.484.894-.332 1.656-.797 2.281-1.391ZM86.5 34.71c-1.407 0-2.618.43-3.625 1.281-1.012.844-1.711 1.98-2.094 3.407h11.375c-.387-1.364-1.094-2.485-2.125-3.36-1.024-.883-2.2-1.328-3.531-1.328ZM104.16 46.757V35.194h-4.78V30.07h4.78v-5.937l6.11-1.375v7.312h6.61v5.125h-6.61v10.313c0 1.105.238 1.883.719 2.328.476.45 1.312.672 2.5.672.562 0 1.093-.035 1.593-.11a9.521 9.521 0 0 0 1.657-.437v5c-.649.211-1.434.379-2.36.516-.93.133-1.715.203-2.36.203-2.593 0-4.554-.586-5.874-1.766-1.324-1.176-1.985-2.894-1.985-5.156ZM122.186 46.757V35.194h-4.781V30.07h4.78v-5.937l6.11-1.375v7.312h6.61v5.125h-6.61v10.313c0 1.105.238 1.883.719 2.328.477.45 1.312.672 2.5.672.562 0 1.094-.035 1.594-.11a9.521 9.521 0 0 0 1.656-.437v5c-.648.211-1.434.379-2.36.516-.93.133-1.714.203-2.359.203-2.594 0-4.554-.586-5.875-1.766-1.324-1.176-1.984-2.894-1.984-5.156ZM157.883 50.413c-1.43 1.168-2.898 2.024-4.406 2.563-1.5.53-3.172.797-5.016.797-1.75 0-3.39-.313-4.922-.938-1.53-.625-2.859-1.473-3.984-2.547a11.545 11.545 0 0 1-2.625-3.812c-.637-1.477-.953-3.067-.953-4.766 0-1.656.3-3.219.906-4.687a12.035 12.035 0 0 1 2.516-3.844 11.66 11.66 0 0 1 3.812-2.578 11.984 11.984 0 0 1 4.72-.938c1.632 0 3.155.324 4.562.969a11.373 11.373 0 0 1 3.671 2.61c1.032 1.093 1.832 2.413 2.407 3.952.582 1.532.875 3.188.875 4.97v1.609h-17.313c.414 1.46 1.219 2.636 2.406 3.53 1.188.888 2.582 1.329 4.188 1.329 1.02 0 1.973-.16 2.86-.484.894-.332 1.656-.797 2.28-1.391ZM147.805 34.71c-1.406 0-2.617.43-3.625 1.281-1.012.844-1.71 1.98-2.094 3.407h11.375c-.386-1.364-1.093-2.485-2.125-3.36-1.023-.883-2.199-1.328-3.53-1.328ZM162.293 53.32V30.07h6.11v2.546c.75-1.007 1.648-1.773 2.702-2.297 1.063-.52 2.227-.78 3.5-.78.602.03 1.102.085 1.5.155.407.075.754.2 1.047.375v5.36a6.53 6.53 0 0 0-1.468-.469 8.822 8.822 0 0 0-1.657-.156 6.31 6.31 0 0 0-3.28.89c-.993.594-1.774 1.461-2.345 2.594V53.32Zm0 0"></path>
                <path d="m180.73 50.241 2.016-2.14a11.093 11.093 0 0 0 3.406 2.203c1.27.523 2.555.781 3.86.781 1.788 0 3.25-.367 4.374-1.11 1.133-.75 1.704-1.718 1.704-2.906 0-.945-.34-1.695-1.016-2.25-.668-.55-1.715-.93-3.14-1.14l-3.876-.531c-2.242-.332-3.902-.993-4.984-1.985-1.086-1-1.625-2.347-1.625-4.047 0-1.875.785-3.425 2.36-4.656 1.581-1.238 3.593-1.86 6.03-1.86 1.602 0 3.126.243 4.563.72 1.445.48 2.86 1.226 4.234 2.234l-1.75 2.234c-1.25-.832-2.464-1.457-3.64-1.875a10.69 10.69 0 0 0-3.594-.625c-1.512 0-2.75.344-3.719 1.031-.968.68-1.453 1.57-1.453 2.672 0 .95.328 1.684.985 2.203.656.524 1.71.887 3.171 1.094l3.875.531c2.227.305 3.899.97 5.016 2 1.125 1.024 1.688 2.383 1.688 4.079 0 .949-.235 1.851-.704 2.703a6.773 6.773 0 0 1-1.921 2.187c-.813.606-1.774 1.078-2.875 1.422-1.094.344-2.282.516-3.563.516-1.844 0-3.578-.305-5.203-.907-1.617-.613-3.024-1.472-4.219-2.578ZM202.018 53.32V22.084l3.297-.766v12.282a8.555 8.555 0 0 1 3.078-2.297c1.196-.52 2.524-.781 3.985-.781 2.52 0 4.582.804 6.187 2.406 1.614 1.605 2.422 3.687 2.422 6.25v14.14h-3.265V39.835c0-1.957-.57-3.516-1.704-4.672-1.125-1.164-2.64-1.75-4.546-1.75-1.336 0-2.532.297-3.594.89-1.055.595-1.906 1.446-2.563 2.548v16.468ZM224.59 42.116c0-1.601.297-3.117.89-4.547.594-1.425 1.407-2.66 2.438-3.703a11.289 11.289 0 0 1 3.64-2.453 11.248 11.248 0 0 1 4.454-.89c1.582 0 3.062.296 4.437.89a11.238 11.238 0 0 1 3.61 2.453c1.03 1.043 1.843 2.278 2.437 3.703.602 1.43.906 2.946.906 4.547 0 1.637-.304 3.168-.906 4.594-.594 1.43-1.406 2.664-2.437 3.703a11.343 11.343 0 0 1-3.61 2.469c-1.375.594-2.855.89-4.437.89-1.574 0-3.059-.296-4.453-.89a11.393 11.393 0 0 1-3.641-2.469c-1.031-1.039-1.844-2.273-2.437-3.703-.594-1.426-.891-2.957-.891-4.594Zm11.422 8.703a7.636 7.636 0 0 0 3.187-.671 7.931 7.931 0 0 0 2.594-1.844c.727-.79 1.3-1.711 1.719-2.766a9.342 9.342 0 0 0 .625-3.422 9.23 9.23 0 0 0-.625-3.406 8.524 8.524 0 0 0-1.719-2.75 8.125 8.125 0 0 0-2.594-1.828 7.697 7.697 0 0 0-3.187-.672 7.75 7.75 0 0 0-3.188.672 8.082 8.082 0 0 0-2.593 1.828 9.056 9.056 0 0 0-1.735 2.75c-.43 1.055-.64 2.188-.64 3.406 0 1.22.207 2.36.625 3.422a8.718 8.718 0 0 0 1.718 2.766 7.834 7.834 0 0 0 2.61 1.844 7.787 7.787 0 0 0 3.203.671ZM251.098 62.46v-31.5h3.25v2.406a9.561 9.561 0 0 1 3.281-2.062 11.067 11.067 0 0 1 3.953-.703c1.57 0 3.04.304 4.406.906a11.142 11.142 0 0 1 3.579 2.437c1.007 1.024 1.804 2.243 2.39 3.657.582 1.406.875 2.914.875 4.515 0 1.606-.293 3.125-.875 4.563-.586 1.43-1.383 2.656-2.39 3.687-1.012 1.024-2.211 1.828-3.594 2.422-1.375.594-2.856.89-4.438.89-1.304 0-2.57-.226-3.797-.671a11.255 11.255 0 0 1-3.343-1.922V62.46Zm10.172-28.953c-1.399 0-2.7.277-3.907.828-1.199.555-2.187 1.32-2.968 2.297v11.062c.78.961 1.78 1.715 3 2.266a9.405 9.405 0 0 0 3.875.813c2.351 0 4.32-.82 5.906-2.47 1.594-1.655 2.39-3.702 2.39-6.14a8.792 8.792 0 0 0-.656-3.406 8.598 8.598 0 0 0-1.75-2.75 8.24 8.24 0 0 0-2.64-1.828 7.976 7.976 0 0 0-3.25-.672Zm0 0"></path>
              </svg>
            </a>
          </div> 
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          {navigation?.links.map((link) => (
            <a aria-current="page" href={link.url} aria-label={link.label} class="router-link-active router-link-exact-active text-sm font-semibold leading-6 text-[#2c2c34] -mx-2 rounded-lg px-2 py-2 hover:text-[#6a30b9] transition">
              {link.label}
            </a>
          ))}
        </div>
        <div class="flex flex-1 items-center justify-end gap-x-2 sm:gap-x-6">
          {navigation.buttons?.map((item) => (
            <a
              key={item?.id}
              id={item?.id}
              href={item?.href}
              target={item?.href.includes("http") ? "_blank" : "_self"}
              class={`${item.primary ? "rounded-md shadow-sm px-2 sm:px-3 py-2 text-sm font-semibold bg-[#7A40D9] text-white hover:bg-[#6A30B9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:transition" : "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-[#2c2c34] lg:-mx-2 lg:rounded-lg lg:px-2 lg:py-2 lg:hover:shadow-sm lg:hover:backdrop-blur-lg lg:hover:bg-gray-100/50 lg:transition"}`}
            >
              {item?.text}
            </a>
          ))}
        </div>
        <div class="flex items-center">
          <label
            class="cursor-pointer lg:hidden pt-6 relative z-40"
            for="menu-mobile"
          >
            <input class="hidden peer" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} class={`relative ${style}`}></div>
            ))}
            <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
              &nbsp;
            </div>
            <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
              <div class="bg-base-100 flex flex-col float-right gap-8 min-h-full pt-12 px-6 shadow-2xl w-1/2">
                <ul class="flex flex-col gap-8">
                  {navigation?.links.map((link) => (
                    <li>
                      <a href={link.url} aria-label={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul class="flex items-center gap-3">
                  {navigation.buttons?.map((item) => (
                    <a
                      key={item?.id}
                      id={item?.id}
                      href={item?.href}
                      target={item?.href.includes("http") ? "_blank" : "_self"}
                      class={`font-normal btn btn-primary ${item.primary && "btn-outline"
                        }`}
                    >
                      {item?.text}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </label>
        </div>
      </nav>
    </header>
  );
}
