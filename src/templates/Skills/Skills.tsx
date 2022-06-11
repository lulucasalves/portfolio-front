import { useEffect, useMemo, useState } from 'react'
import * as brandsList from '../../data/logos.json'
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle
} from 'react-icons/io'
import Image from 'next/image'

interface IBrand {
  svg: string
  category: Array<string>
  name: string
}

export function Skills() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [viewAll, setViewAll] = useState(false)
  const [brands, setBrands] = useState<IBrand[]>([
    { svg: '', category: [''], name: 'zzz' }
  ])

  function filterBrands(val: IBrand) {
    const name = val.name.toLowerCase()

    return (
      name.includes(search.toLowerCase()) &&
      val.category.includes(category.toLowerCase()) &&
      !name.includes('zzz')
    )
  }

  useEffect(() => {
    brandsList.map(({ name, category, svg }) => {
      setBrands((oldArray) => [...oldArray, { name, category, svg }])
    })
  }, [brandsList])

  const brandsListFilter = brands.filter((val) => filterBrands(val))

  return (
    <div
      id="skills"
      className={`skillsDiv ${viewAll ? 'viewAll' : 'simplify'}`}
    >
      <h2>Hábilidades</h2>
      <div className="skillsOpt">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Procure por alguma tecnologia"
        />
        <select defaultValue="" onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Categoria
          </option>
          <option value="">Todas</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile</option>
          <option value="database">Banco de dados</option>
          <option value="framework">Framework / Biblioteca</option>
          <option value="language">Linguagem</option>
        </select>
      </div>

      <div className="techBrands">
        <div className="brand">
          {brandsListFilter.map(({ svg, name }: IBrand) => {
            return (
              <div className="brandimg" key={svg} title={name}>
                <Image width={500} height={500} src={`/logos/${svg}.svg`} />
              </div>
            )
          })}
        </div>
      </div>
      {brandsListFilter.length > 21 ? (
        <>
          <div className="brandLine" />
          {viewAll ? (
            <IoIosArrowDropupCircle
              onClick={() => setViewAll(false)}
              className="brandArrow"
            />
          ) : (
            <IoIosArrowDropdownCircle
              onClick={() => setViewAll(true)}
              className="brandArrow"
            />
          )}
        </>
      ) : null}
    </div>
  )
}
