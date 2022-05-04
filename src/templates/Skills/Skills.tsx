import { useState } from 'react'

interface IBrand {
  svg: string
  category: Array<string>
}

export function Skills() {
  const brandsList = [
    { svg: 'arduino', category: ['backend', ''] },
    { svg: 'aws', category: ['backend', ''] },
    { svg: 'bootstrap', category: ['frontend', '', 'framework'] },
    { svg: 'c', category: ['backend', '', 'language'] },
    { svg: 'css', category: ['frontend', ''] },
    { svg: 'django', category: ['frontend', 'backend', '', 'framework'] },
    { svg: 'docker', category: ['backend', ''] },
    { svg: 'figma', category: ['frontend', ''] },
    { svg: 'flask', category: ['backend', '', 'framework'] },
    { svg: 'git', category: [''] },
    { svg: 'graphql', category: ['frontend', 'backend', '', 'framework'] },
    { svg: 'html', category: ['frontend', ''] },
    {
      svg: 'javascript',
      category: ['frontend', '', 'backend', 'mobile', 'language']
    },
    { svg: 'jquery', category: ['frontend', '', 'framework'] },
    { svg: 'mongodb', category: ['backend', '', 'bancodedados'] },
    { svg: 'mysql', category: ['backend', '', 'bancodedados'] },
    { svg: 'nodejs', category: ['backend', ''] },
    { svg: 'postgres', category: ['backend', '', 'bancodedados'] },
    { svg: 'python', category: ['backend', 'frontend', '', 'language'] },
    { svg: 'react', category: ['frontend', '', 'framework'] },
    { svg: 'reactNative', category: ['mobile', 'frontend', '', 'framework'] },
    { svg: 'redis', category: ['backend', '', 'bancodedados'] },
    { svg: 'sass', category: ['frontend', '', 'framework'] },
    { svg: 'sqlite', category: ['backend', '', 'bancodedados'] },
    { svg: 'tailwind', category: ['frontend', '', 'framework'] },
    { svg: 'typescript', category: ['backend', 'frontend', '', 'language'] }
  ]

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  function filterBrands(val: IBrand) {
    return val.svg.includes(search) && val.category.includes(category)
  }

  return (
    <div className="skillsDiv">
      <h2>{'{ Hábilidades }'}</h2>
      <div className="skillsOpt">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Procure por alguma tecnologia"
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option selected value="" disabled>
            Categoria
          </option>
          <option value="">Todas</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile</option>
          <option value="bancodedados">Banco de dados</option>
          <option value="framework">Framework</option>
          <option value="language">Linguagem</option>
        </select>
      </div>

      <div className="techBrands">
        <div className="brand">
          {brandsList
            .filter((val) => filterBrands(val))
            .map(({ svg }: IBrand) => {
              return <img title={svg} src={`./logos/${svg}.svg`} />
            })}
        </div>
      </div>
    </div>
  )
}
