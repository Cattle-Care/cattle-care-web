import React from 'react';

function MonitorFarm() {
  return (
    <div>
      <div className="my-8 sm:my-16 md:my-24 lg:my-48">
        <div>
          <h1 className="text-center text-3xl sm:text-4xl my-24 font-bold">Monitor Your farm</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:max-w-sm mx-auto space-y-12 md:flex-row md:max-w-2xl md:mx-auto  md:items-center md:justify-between  md:space-y-0 lg:max-w-4xl lg:mx-auto lg:flex lg:justify-between lg:items-center xl:max-w-6xl xl:mx-auto 2xl:max-w-7xl 2xl:mx-auto">
          <div className="space-y-2">
            <img
              className="w-full mb-10 md:h-28 md:w-28 md:-ml-3 md:mb-10 lg:w-16 lg:h-16"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADb29v7+/t6enro6Ojy8vIKCgrv7+/4+PhoaGiVlZWgoKBISEjr6+v19fWysrLIyMiAgIAtLS08PDzh4eGoqKggICCGhoZcXFxubm5UVFQcHBzDw8MRERE3NzfQ0NAwMDCNjY2ZmZm44rCtAAADCUlEQVR4nO3ZiVLiQBhFYcIawiIoizoyorz/O84oVTMSU2Un3NtNdZ3zAD/9FXQ6Cb1e9wbrWbWfFN4m+2q2vmKRVzS+N9u+9ngXH3iK6PtoHtlXbiIDi2IxjgncRvd9NIoHXCYBFkW8b/EhkXATCxjzInrZLA4wzSY8F2crPiUUPscABl5mtr1Bm0J/GTFO/nnQSnat5+6C5q4Monq/glbSfsOMguZWBlG9oIUU09Zzp0FzXwyiWmWYsP1+CRMWBlKtwCvCtvXgsF9psTSYLuuHLaT92TwLG9w3mC4LFBaH5ahNy0Pg3NsRukKIECFChAgRRhcO45RQaP+0cwmFA/vHfYZQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLUhdIRQG0JHCLVdCO2fdi6hMEEIESJEiBAhQoQIESJE+NHvrIWL1XLamy5Xi0yFm/+L629yFA4vxjznJxzW5nQl3qzw9dugh8yEx2+D1nkJFw2T3rISrhomzbMSbhsmHbMSNr0cH2cvHGQlHDdMKrMSHhsm5bUPZw2T3rMSvjRMmmQlbDgQd90G3aywuKvN6XZW3LKwdus9eMtOWLyWX6aUHZ8sblpYFPN/Q7rdkt6+8O9j8KG/7R+G14zwC7fXLE/QyC6cJhZO7cLez4uw5gf2npICnyIIO96LiNpFEHZ76FHV9Bgmr0oIrGIAk54X/rPis8dkwPc4wK5vOq/v+4tzV6kuNlEuM+dGSYCRNuG5svsfgF1bRPwGPztFBs5/XpK68j6i77H+EiRSx1O17/bGLLzJvjodr1nkH3odQquQ8czSAAAAAElFTkSuQmCC"
              alt=""
            ></img>
            <h2 className="text-2xl text-center font-bold text-gray-600 mb-4 sm:text-left mt-10 leading-loose">
              Easy to Control
            </h2>
            <p className="text-gray-400 text-md leading-loose">
              Tailwind CSS is the only framework
            </p>
            <p className="text-gray-400 leading-loose">Tailwind CSS is the only framework</p>
          </div>
          <div className="space-y-2">
            <img
              className="w-full mb-10 md:h-28 md:w-28 md:-ml-2 md:mb-9 lg:w-16 lg:h-16 "
              src="https://img.icons8.com/pastel-glyph/2x/report-file.png"
            ></img>
            <h2 className="text-2xl  font-bold text-center text-gray-600 mb-4 sm:text-left mt-10 leading-loose">
              Daily Report
            </h2>
            <p className="text-gray-400 leading-loose">Tailwind CSS is the only framework</p>
            <p className="text-gray-400 leading-loose">Tailwind CSS is the only framework</p>
          </div>
          <div className="space-y-2">
            <img
              className="mb-10 w-full md:h-28 md:w-28 md:mb-10 lg:w-16 lg:h-16"
              src="data:image/png;base64,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"
              alt=""
            ></img>
            <h2 className="text-2xl  font-bold text-center text-gray-600 mb-4 sm:text-left mt-10 leading-loose">
              Real Time
            </h2>
            <p className="text-gray-400 leading-loose">Tailwind CSS is the only framework</p>
            <p className="text-gray-400 leading-loose">Tailwind CSS is the only framework</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorFarm;
