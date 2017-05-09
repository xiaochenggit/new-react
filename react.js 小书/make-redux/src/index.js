function createStore (state, stateChanger) {
  // 创建一个空数组 添加需要监听的数据 
  var listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    stateChanger(state, action)
   	// 遍历添加的监控
   	listeners.forEach((listener) => listener());
  }
  return { getState, dispatch, subscribe }
}

function renderApp (newAppState, oldAppState = {}) {
	if (newAppState === oldAppState) return // 数据没有变化就不渲染了
  console.log('render app...');
  renderTitle(newAppState.title)
  renderContent(newAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return // 数据没有变化就不渲染了
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.text
}

function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return // 数据没有变化就不渲染了
	console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.text
}

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

const store = createStore(appState, stateChanger);
let oldState = store.getState(); // 缓存旧的 state
// 添加需要监听的数据
store.subscribe(() => 
  const newState = store.getState();// 数据可能变化，获取新的 state
  renderApp(store.getState());
  oldState = newState
);
renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色