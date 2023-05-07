import React from "react";
import "./MobileFilterCatalog.css";
import { Collapse } from 'react-collapse';

function MobileFilterCatalog(props) {
  const height = 'auto';
  const [is1POpened, setIs1POpened] = React.useState(false);
  const [is1TOpened, setIs1TOpened] = React.useState(false);

  const [is2POpened, setIs2POpened] = React.useState(false);
  const [is2MOpened, setIs2MOpened] = React.useState(false);
  const [is2PsOpened, setIs2PsOpened] = React.useState(false);
  const [is2TOpened, setIs2TOpened] = React.useState(false);
  const [is2ROpened, setIs2ROpened] = React.useState(false);
  const [is2KOpened, setIs2KOpened] = React.useState(false);
  const [is2GOpened, setIs2GOpened] = React.useState(false);
  const [is2MgOpened, setIs2MgOpened] = React.useState(false);
  const [is2UOpened, setIs2UOpened] = React.useState(false);
  const [is2NOpened, setIs2NOpened] = React.useState(false);
  const [is2FOpened, setIs2FOpened] = React.useState(false);
  const [is2NdOpened, setIs2NdOpened] = React.useState(false);
  const [is2HOpened, setIs2HOpened] = React.useState(false);
  const [is2NlOpened, setIs2NlOpened] = React.useState(false);

  const [is2P3POpened, setIs2P3POpened] = React.useState(false);
  const [is2T3POpened, setIs2T3POpened] = React.useState(false);
  const [is2G3BOpened, setIs2G3BOpened] = React.useState(false);
  const [is2N3NOpened, setIs2N3NOpened] = React.useState(false);

  return (
    <div className={`mobile-filter ${props.isOpen ? `mobile-filter_opened` : ``}`}>
      <div className="mobile-filter__container">
        <button
          className="mobile-filter__close-btn"
          type="reset"
          onClick={props.changeState}
        ></button>
        
        <div className="mobile-filter__section">
          <p onClick={() => setIs1POpened(!is1POpened)} className="mobile-filter__title">Пиротехника</p>
          <Collapse isOpened={is1POpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="mobile-filter__checkbox-group">
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Дым"
                  checked={props.filters.includes("Дым")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Дым") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Дым</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Бенгальские свечи"
                  checked={props.filters.includes("Бенгальские свечи")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Бенгальские свечи") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Бенгальские свечи</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Хлопушки"
                  checked={props.filters.includes("Хлопушки")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Хлопушки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Хлопушки</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Батареи салютов"
                  checked={props.filters.includes("Батареи салютов")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Батареи салютов") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Батареи салютов</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Ракеты"
                  checked={props.filters.includes("Ракеты")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Ракеты") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Ракеты</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Фонтаны"
                  checked={props.filters.includes("Фонтаны")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фонтаны") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Фонтаны</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Летающие фейерверки"
                  checked={props.filters.includes("Летающие фейерверки")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Летающие фейерверки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Летающие фейерверки</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Римские свечи"
                  checked={props.filters.includes("Римские свечи")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Римские свечи") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Римские свечи</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Петарды"
                  checked={props.filters.includes("Петарды")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Петарды") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Петарды</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Наземные фейерверки"
                  checked={props.filters.includes("Наземные фейерверки")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Наземные фейерверки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Наземные фейерверки</p>
              </label>
              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Фестивальные шары"
                  checked={props.filters.includes("Фестивальные шары")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фестивальные шары") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text">Фестивальные шары</p>
              </label>
            </div>
          </Collapse>
        </div>
        <div className="mobile-filter__section">
          <p onClick={() => setIs1TOpened(!is1TOpened)} className="mobile-filter__title">Туризм</p>
          <Collapse isOpened={is1TOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="mobile-filter__checkbox-group">
              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2POpened(!is2POpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Палатки, шатры, тенты, аксессуары</p>
                </label>
                <Collapse isOpened={is2POpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                    <div>
                      <label className="mobile-filter__checkbox">
                        {/* <input
                          type="checkbox"
                          className="filter__checkbox-container"
                          onClick={props.handleCat11CheckboxState}
                        ></input> */}
                        {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                        <p onClick={() => setIs2P3POpened(!is2P3POpened)} className="mobile-filter__checkbox-text">Палатки</p>
                      </label>
                      <Collapse isOpened={is2P3POpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                        <div style={{height}} className="mobile-filter__checkbox-group mobile-filter__checkbox-group_last">
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Палатки 1-местные"
                              checked={props.filters.includes("Палатки 1-местные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Палатки 1-местные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">1-местные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Палатки 2-местные"
                              checked={props.filters.includes("Палатки 2-местные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Палатки 2-местные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">2-местные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Палатки 3-местные"
                              checked={props.filters.includes("Палатки 3-местные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Палатки 3-местные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">3-местные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Палатки 4-местные"
                              checked={props.filters.includes("Палатки 4-местные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Палатки 4-местные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">4-местные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Палатки 5-местные и больше"
                              checked={props.filters.includes("Палатки 5-местные и больше")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Палатки 5-местные и больше") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">5-местные и более</p>
                          </label>
                        </div>
                      </Collapse>
                    </div>
                    
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Шатры и тенты"
                        checked={props.filters.includes("Шатры и тенты")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Шатры и тенты") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Шатры и тенты</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Аксессуары (Палатки, шатры, тенты, аксессуары)"
                        checked={props.filters.includes("Аксессуары (Палатки, шатры, тенты, аксессуары)")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Аксессуары (Палатки, шатры, тенты, аксессуары)") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Аксессуары</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2MOpened(!is2MOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Мебель для кемпинга</p>
                </label>
                <Collapse isOpened={is2MOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Стулья"
                        checked={props.filters.includes("Стулья")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Стулья") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Стулья</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Кресла"
                        checked={props.filters.includes("Кресла")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Кресла") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Кресла</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Кровати"
                        checked={props.filters.includes("Кровати")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Кровати") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Кровати</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Раскладушки"
                        checked={props.filters.includes("Раскладушки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Раскладушки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Раскладушки</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2PsOpened(!is2PsOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Посуда</p>
                </label>
                <Collapse isOpened={is2PsOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Наборы для пикника"
                        checked={props.filters.includes("Наборы для пикника")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Наборы для пикника") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Наборы для пикника</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Наборы тур. посуды"
                        checked={props.filters.includes("Наборы тур. посуды")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Наборы тур. посуды") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Наборы тур. посуды</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Чашки, тарелки"
                        checked={props.filters.includes("Чашки, тарелки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Чашки, тарелки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Чашки, тарелки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Кружки, термокружки"
                        checked={props.filters.includes("Кружки, термокружки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Кружки, термокружки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Кружки, термокружки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Столовые приборы"
                        checked={props.filters.includes("Столовые приборы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Столовые приборы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Столовые приборы</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Казаны, котелки"
                        checked={props.filters.includes("Казаны, котелки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Казаны, котелки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Казаны, котелки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Сковородки"
                        checked={props.filters.includes("Сковородки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Сковородки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Сковородки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Чайники"
                        checked={props.filters.includes("Чайники")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Чайники") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Чайники</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Фляжки, бутылки"
                        checked={props.filters.includes("Фляжки, бутылки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фляжки, бутылки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Фляжки, бутылки</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2TOpened(!is2TOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Термосы</p>
                </label>
                <Collapse isOpened={is2TOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                    <div>
                      <label className="mobile-filter__checkbox">
                        {/* <input
                          type="checkbox"
                          className="filter__checkbox-container"
                          onClick={props.handleCat11CheckboxState}
                        ></input> */}
                        {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                        <p onClick={() => setIs2T3POpened(!is2T3POpened)} className="mobile-filter__checkbox-text">Питьевые</p>
                      </label>
                      <Collapse isOpened={is2T3POpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                        <div style={{height}} className="mobile-filter__checkbox-group mobile-filter__checkbox-group_last">
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Термосы питьевые до 1-го литра"
                              checked={props.filters.includes("Термосы питьевые до 1-го литра")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Термосы питьевые до 1-го литра") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">До 1-го литра</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Термосы питьевые от 1-го до 2-х литров"
                              checked={props.filters.includes("Термосы питьевые от 1-го до 2-х литров")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Термосы питьевые от 1-го до 2-х литров") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">От 1-го до 2-х литров</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Термосы питьевые от 2-х литров"
                              checked={props.filters.includes("Термосы питьевые от 2-х литров")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Термосы питьевые от 2-х литров") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">От 2-х литров</p>
                          </label>
                        </div>
                      </Collapse>
                    </div>
                    
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Термосы едовые"
                        checked={props.filters.includes("Термосы едовые")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Термосы едовые") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Едовые</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Спальные мешки"
                  checked={props.filters.includes("Спальные мешки")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Спальные мешки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Спальные мешки</p>
              </label>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2ROpened(!is2ROpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Рюкзаки, сумки, мешки</p>
                </label>
                <Collapse isOpened={is2ROpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Рюкзаки"
                        checked={props.filters.includes("Рюкзаки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Рюкзаки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Рюкзаки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Сумки"
                        checked={props.filters.includes("Сумки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Сумки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Сумки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Мешки"
                        checked={props.filters.includes("Мешки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Мешки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Мешки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Гермо"
                        checked={props.filters.includes("Гермо")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Гермо") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Гермо</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2KOpened(!is2KOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Коврики, карематы, хобы</p>
                </label>
                <Collapse isOpened={is2KOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Коврики"
                        checked={props.filters.includes("Коврики")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Коврики") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Коврики</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Карематы"
                        checked={props.filters.includes("Карематы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Карематы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Карематы</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Хобы"
                        checked={props.filters.includes("Хобы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Хобы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Хобы</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2GOpened(!is2GOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Газовое оборудование</p>
                </label>
                <Collapse isOpened={is2GOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Плитки"
                        checked={props.filters.includes("Плитки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Плитки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Плитки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Обогреватели"
                        checked={props.filters.includes("Обогреватели")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Обогреватели") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Обогреватели</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Горелки"
                        checked={props.filters.includes("Горелки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Горелки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Горелки</p>
                    </label>

                    <div>
                      <label className="mobile-filter__checkbox">
                        {/* <input
                          type="checkbox"
                          className="filter__checkbox-container"
                          onClick={props.handleCat11CheckboxState}
                        ></input> */}
                        {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                        <p onClick={() => setIs2G3BOpened(!is2G3BOpened)} className="mobile-filter__checkbox-text">Баллоны</p>
                      </label>
                      <Collapse isOpened={is2G3BOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                        <div style={{height}} className="mobile-filter__checkbox-group mobile-filter__checkbox-group_last">
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Баллоны цанговые"
                              checked={props.filters.includes("Баллоны цанговые")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Баллоны цанговые") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">Цанговые</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Баллоны резьбовые"
                              checked={props.filters.includes("Баллоны резьбовые")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Баллоны резьбовые") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">Резьбовые</p>
                          </label>
                        </div>
                      </Collapse>
                    </div>
                    
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Переходники и аксессуары (Газовое оборудование)"
                        checked={props.filters.includes("Переходники и аксессуары (Газовое оборудование)")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Переходники и аксессуары (Газовое оборудование)") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Переходники и аксессуары</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2MgOpened(!is2MgOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Мангалы, коптильни, шампуры, решетки</p>
                </label>
                <Collapse isOpened={is2MgOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Мангалы"
                        checked={props.filters.includes("Мангалы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Мангалы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Мангалы</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Коптильни"
                        checked={props.filters.includes("Коптильни")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Коптильни") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Коптильни</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Шампуры"
                        checked={props.filters.includes("Шампуры")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Шампуры") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Шампуры</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Решётки"
                        checked={props.filters.includes("Решётки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Решётки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Решётки</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Подарочные наборы (Мангалы, коптильни, шампуры, решетки)"
                        checked={props.filters.includes("Подарочные наборы (Мангалы, коптильни, шампуры, решетки)")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Подарочные наборы (Мангалы, коптильни, шампуры, решетки)") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Подарочные наборы</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2UOpened(!is2UOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Уголь, брикеты, дрова</p>
                </label>
                <Collapse isOpened={is2UOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Уголь"
                        checked={props.filters.includes("Уголь")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Уголь") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Уголь</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Брикеты"
                        checked={props.filters.includes("Брикеты")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Брикеты") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Брикеты</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Дрова"
                        checked={props.filters.includes("Дрова")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Дрова") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Дрова</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2NOpened(!is2NOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Ножи, мультитулы</p>
                </label>
                <Collapse isOpened={is2NOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                    <div>
                      <label className="mobile-filter__checkbox">
                        {/* <input
                          type="checkbox"
                          className="filter__checkbox-container"
                          onClick={props.handleCat11CheckboxState}
                        ></input> */}
                        {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                        <p onClick={() => setIs2N3NOpened(!is2N3NOpened)} className="mobile-filter__checkbox-text">Ножи</p>
                      </label>
                      <Collapse isOpened={is2N3NOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                        <div style={{height}} className="mobile-filter__checkbox-group mobile-filter__checkbox-group_last">
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Ножи фиксированные"
                              checked={props.filters.includes("Ножи фиксированные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Ножи фиксированные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">Фиксированные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Ножи складные"
                              checked={props.filters.includes("Ножи складные")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Ножи складные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">Складные</p>
                          </label>
                          <label className="mobile-filter__checkbox">
                            <input
                              type="checkbox"
                              className="mobile-filter__checkbox-container"
                              value="Точилки для ножей"
                              checked={props.filters.includes("Точилки для ножей")}
                              onChange={props.handleFilterChange}                            ></input>
                            <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Точилки для ножей") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                            <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_subtitle">Точилки для ножей</p>
                          </label>
                        </div>
                      </Collapse>
                    </div>
                    
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Мультитулы"
                        checked={props.filters.includes("Мультитулы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Мультитулы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Мультитулы</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2FOpened(!is2FOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Фонарики</p>
                </label>
                <Collapse isOpened={is2FOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Фонарики ручные"
                        checked={props.filters.includes("Фонарики ручные")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фонарики ручные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Ручные</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Фонарики налобные"
                        checked={props.filters.includes("Фонарики налобные")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фонарики налобные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Налобные</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Фонарики кемпинговые"
                        checked={props.filters.includes("Фонарики кемпинговые")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Фонарики кемпинговые") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Кемпинговые</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2NdOpened(!is2NdOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Надувные матрасы и подушки</p>
                </label>
                <Collapse isOpened={is2NdOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Надувные матрасы"
                        checked={props.filters.includes("Надувные матрасы")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Надувные матрасы") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Матрасы</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Надувные подушки"
                        checked={props.filters.includes("Надувные подушки")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Надувные подушки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Подушки</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2HOpened(!is2HOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Для хранения продуктов</p>
                </label>
                <Collapse isOpened={is2HOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Автохолодильники"
                        checked={props.filters.includes("Автохолодильники")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Автохолодильники") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Автохолодильники</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Термоконтейнеры"
                        checked={props.filters.includes("Термоконтейнеры")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Термоконтейнеры") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Термоконтейнеры</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Аккумуляторы холода"
                        checked={props.filters.includes("Аккумуляторы холода")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Аккумуляторы холода") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Аккумуляторы холода</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <div>
                <label className="mobile-filter__checkbox">
                  {/* <input
                    type="checkbox"
                    className="filter__checkbox-container"
                    onClick={props.handleCat11CheckboxState}
                  ></input> */}
                  {/* <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span> */}
                  <p onClick={() => setIs2NlOpened(!is2NlOpened)} className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Надувные лодки</p>
                </label>
                <Collapse isOpened={is2NlOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="mobile-filter__checkbox-group">
                  <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Надувные лодки гребные"
                        checked={props.filters.includes("Надувные лодки гребные")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Надувные лодки гребные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Гребные</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Надувные лодки моторные"
                        checked={props.filters.includes("Надувные лодки моторные")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Надувные лодки моторные") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Моторные</p>
                    </label>
                    <label className="mobile-filter__checkbox">
                      <input
                        type="checkbox"
                        className="mobile-filter__checkbox-container"
                        value="Комплектующие и расходники (Надувные лодки)"
                        checked={props.filters.includes("Комплектующие и расходники (Надувные лодки)")}
                        onChange={props.handleFilterChange}                      ></input>
                      <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Комплектующие и расходники (Надувные лодки)") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                      <p className="mobile-filter__checkbox-text">Комплектующие и расходники</p>
                    </label>
                  </div>
                </Collapse>
              </div>

              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Для выживания"
                  checked={props.filters.includes("Для выживания")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Для выживания") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Для выживания</p>
              </label>

              <label className="mobile-filter__checkbox">
                <input
                  type="checkbox"
                  className="mobile-filter__checkbox-container"
                  value="Сухпайки"
                  checked={props.filters.includes("Сухпайки")}
                  onChange={props.handleFilterChange}                ></input>
                <span className={`mobile-filter__checkbox-visible ${props.filters.includes("Сухпайки") ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
                <p className="mobile-filter__checkbox-text mobile-filter__checkbox-text_title">Сухпайки</p>
              </label>

            </div>
          </Collapse>
        </div>
        
      </div>
    </div>
  );
}

export default MobileFilterCatalog;
