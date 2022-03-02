import './Window.css';

function NewWindow(props) {
  return (
    <div className="window d-flex vstack" id="window-readme">

        <div className="window-header d-flex hstack justify-content-between" id="readme-handle">

                <btn className="square_button ms-auto" id="window-readme-close"></btn>
                <div className='window-header-center flex-grow-1 mx-1'></div>
                <btn className="square_button_maximize d-block pr-5" id="window-readme-max"></btn>
                <div class="vr"></div>
                <btn className="square_button_minimize" id="window-readme-min"></btn>

                <span className="window-header-title no-select" id="readme-handle"><p class="px-2">ReadMe</p></span>
        </div>
        


        <div className="window-content" id="window-content-readme">
            <div className="window-content-body" style={{overflow:'hidden'}}>
                <img className="d-block d-md-none" src="src/img/ascii_readme_mobile.png" width="100%" alt=""/>
                 <span className="d-md-block">
<pre className="mb-1">
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   ___   ___  ___  _____  _____  _  ___    ___  ___   __  __  ___  _   _  _____  ___  ___    #
#  / __| / __|/ _ \|_   _||_   _|( )/ __|  / __|/ _ \ |  \/  || _ \| | | ||_   _|| __|| _ \   #
#  \__ \ | (_ |(_)|  | |    | |  |/ \__ \ | (__ |(_)| | |\/| ||  _/| |_| |  | |  | _| |   /   #
#  |___/ \___|\___/  |_|    |_|     |___/  \___|\___/ |_|  |_||_|   \___/   |_|  |___||_|_\   #
#                                                                                             #
#                             PERSONAL WEBSITE OF SCOTT HENDRIX                               #
#                                                                                             #
#  ┌───────────────────────────────────────────────────────────────────────────────────────┐  #
#  │   I work as a technology consultant and in my part time like to develop web projects. │  #
#  │   Lately  these projects have been web based, as I have been studying various Web3    │  #
#  │   libraries and plan to begin working on a tool for use with the Arweave blockchain.  │  #
#  └───────────────────────────────────────────────────────────────────────────────────────┘  #
#                                                                                             #
#                        source   :   github.com/scottroot/scotts-computer                    #
#                    built with   :   jquery-ui, js, css                                      #
#                                                                                             #
#                                                                                             #
#    https://scotts.computer                                                                  #
#    https://scottroot.github.io/scotts-computer                                              #
#                                                                                             #
#                                                                                             #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
</pre></span> 
            </div>
        </div>

</div>
)
}

export default NewWindow;