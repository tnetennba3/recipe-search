import styled from 'styled-components'
import searchIcon from './img/search.svg'

const WHITE = '#FFF'
const LIGHT = '#E3E4E5'
const MEDIUM = '#707376'

const Wrapper = styled.div`
  max-width: 1400px;
  padding: 40px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`

const SearchInput = styled.input`
  background-color: ${LIGHT};
  background-size: 100%;
  font-size: 16px;
  padding: 18px 54px 18px 18px;
  max-width: 400px;
  width: calc(100% - 72px);
  border: none;
  outline: none;
  transition: background-color 0.3s ease, border-bottom 0.3s ease;

  ::placeholder {
    color: ${MEDIUM};
  }

  &:focus {
    background-color: ${WHITE};
    border-bottom: solid;
  }

  @media (max-width: 480px) {
    max-width: 228px;
  }
`

const SearchButton = styled.button`
  color: ${WHITE};
  background: center no-repeat url(${searchIcon});
  background-size: 20px;
  margin-left: -54px;
  padding: 33px 27px 21px;
  margin-bottom: 5px;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
`

const RecipeList = styled.ol`
  padding-inline-start: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RecipeCard = styled.li`
  width: 300px;
  height: 410px;
  list-style: none;
  margin: 20px;
  background-color: ${LIGHT};
`

const RecipeImage = styled.img`
  width: 300px;
  height: 300px;
`

const RecipeName = styled.p`
  margin: 10px;
  text-align: left;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const RecipeInfo = styled.p`
  margin: 0 10px;
  text-align: left;
  font-size: 14px;
`

export {
  Wrapper,
  SearchInput,
  SearchButton,
  RecipeList,
  RecipeCard,
  RecipeImage,
  RecipeName,
  RecipeInfo,
}
