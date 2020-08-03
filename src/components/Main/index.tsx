import * as S from './styled'

const Main = ({
    title = 'Advanced React',
    description = 'TypeScript, NextJs, and Styled Components'
}) => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo.svg"
            alt="React logo as an Atom representing React official logo"
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Project illustration representing a programmer on his computer"
        />
    </S.Wrapper>
)

export default Main
