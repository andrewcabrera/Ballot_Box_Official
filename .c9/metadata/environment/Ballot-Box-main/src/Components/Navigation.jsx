{"filter":false,"title":"Navigation.jsx","tooltip":"/Ballot-Box-main/src/Components/Navigation.jsx","undoManager":{"mark":27,"position":27,"stack":[[{"start":{"row":0,"column":0},"end":{"row":50,"column":38},"action":"insert","lines":["import React from \"react\";","import { Link, withRouter } from \"react-router-dom\";","","function Navigation(props) {","  return (","    <div className=\"navigation\">","      <nav class=\"navbar navbar-expand navbar-dark bg-dark\">","        <div class=\"container\">","          <Link class=\"navbar-brand\" to=\"/\">","            React Multi-Page Website","          </Link>","","          <div>","            <ul class=\"navbar-nav ml-auto\">","              <li","                class={`nav-item  ${","                  props.location.pathname === \"/\" ? \"active\" : \"\"","                }`}","              >","                <Link class=\"nav-link\" to=\"/\">","                  Home","                  <span class=\"sr-only\">(current)</span>","                </Link>","              </li>","              <li","                class={`nav-item  ${","                  props.location.pathname === \"/about\" ? \"active\" : \"\"","                }`}","              >","                <Link class=\"nav-link\" to=\"/about\">","                  About","                </Link>","              </li>","              <li","                class={`nav-item  ${","                  props.location.pathname === \"/contact\" ? \"active\" : \"\"","                }`}","              >","                <Link class=\"nav-link\" to=\"/contact\">","                  Contact","                </Link>","              </li>","            </ul>","          </div>","        </div>","      </nav>","    </div>","  );","}","","export default withRouter(Navigation);"],"id":1}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":57},"action":"remove","lines":["navbar navbar-expand navbar-dark bg-dar"],"id":2}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["k"],"id":3}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":28},"action":"remove","lines":["containe"],"id":4}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":35},"action":"remove","lines":["navbar-brand"],"id":5}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":18},"action":"remove","lines":["class=\""],"id":6}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"remove","lines":["\""],"id":7},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"remove","lines":[" "]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":22},"action":"remove","lines":[" class=\"r\""],"id":8}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":31},"action":"remove","lines":[" class=\"\" to=\"/\""],"id":9}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":42},"action":"remove","lines":["class=\"navbar-nav ml-auto\""],"id":10},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"remove","lines":[" "]}],[{"start":{"row":15,"column":16},"end":{"row":17,"column":19},"action":"remove","lines":["class={`nav-item  ${","                  props.location.pathname === \"/\" ? \"active\" : \"\"","                }`}"],"id":11},{"start":{"row":15,"column":12},"end":{"row":15,"column":16},"action":"remove","lines":["    "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":12},"action":"remove","lines":["    "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":8},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":17},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"remove","lines":[" "],"id":12},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"remove","lines":[" "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":12},"action":"remove","lines":["    "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":8},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":17},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":15,"column":22},"end":{"row":15,"column":44},"action":"remove","lines":["class=\"nav-link\" to=\"/"],"id":13}],[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"remove","lines":["\""],"id":14},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"remove","lines":[" "]}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":39},"action":"remove","lines":["class=\"sr-only\""],"id":17},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":[" "]}],[{"start":{"row":21,"column":15},"end":{"row":23,"column":19},"action":"remove","lines":[" class={`nav-item  ${","                  props.location.pathname === \"/about\" ? \"active\" : \"\"","                }`}"],"id":18},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"remove","lines":[" "]},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"remove","lines":[" "]},{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":[" "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":12},"action":"remove","lines":["    "]},{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"remove","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":20,"column":17},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":19}],[{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"remove","lines":[" "],"id":20},{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":[" "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":12},"action":"remove","lines":["    "]},{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"remove","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":17},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":21},"end":{"row":21,"column":50},"action":"remove","lines":[" class=\"nav-link\" to=\"/about\""],"id":21}],[{"start":{"row":26,"column":16},"end":{"row":28,"column":19},"action":"remove","lines":["class={`nav-item  ${","                  props.location.pathname === \"/contact\" ? \"active\" : \"\"","                }`}"],"id":22},{"start":{"row":26,"column":12},"end":{"row":26,"column":16},"action":"remove","lines":["    "]},{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"remove","lines":["    "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"remove","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":17},"end":{"row":26,"column":0},"action":"remove","lines":["",""]},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"remove","lines":["i"]}],[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["i"],"id":23}],[{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"remove","lines":[" "],"id":24},{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"remove","lines":[" "]},{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"remove","lines":["    "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"remove","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":17},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":52},"action":"remove","lines":["class=\"nav-link\" to=\"/contact\""],"id":25},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"remove","lines":[" "]}],[{"start":{"row":17,"column":33},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":18,"column":0},"end":{"row":18,"column":18},"action":"insert","lines":["                  "]}],[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["Ï"],"id":27}],[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"remove","lines":["Ï"],"id":28}],[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["Ï"],"id":29}],[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"remove","lines":["Ï"],"id":30}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":32},"end":{"row":5,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1619057252743,"hash":"6df369d0d459df1ce3b38aa87260ce604efcfaf5"}