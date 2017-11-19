'use strict'

import React from 'react'
import { Modal, Input, Button, Textarea, SelectBox } from 'components'
import { Row, Col } from 'react-flexbox-grid'

import style from './post-form.styl'

const PostForm = ({ title, formIsOpen, onClickClose }) => (
  <Modal
    title={title}
    open={formIsOpen}
    onClickClose={onClickClose}>
    <Row>
      <Col xs>
        <Input label='title' />
      </Col>
      <Col xs>
        <Input label='author' />
      </Col>
    </Row>
    <Row>
      <Col xs>
        <SelectBox
          label='Category'
          placeholder='Select a category'
          options={[
            { value: 'react', label: 'react' },
            { value: 'redux', label: 'redux' },
            { value: 'udacity', label: 'udacity' }
          ]}
        />
      </Col>
    </Row>
    <Row>
      <Col xs>
        <Textarea label='posting' />
      </Col>
    </Row>
    <div className={style.footer}>
      <Button label='Salvar' primary onClick={onClickClose} />
    </div>
  </Modal>
)

export { PostForm }
