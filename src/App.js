import React, { Component } from 'react';
import { Button } from '@alfalab/core-components-button';
import { Typography } from '@alfalab/core-components-typography';
import { Input } from '@alfalab/core-components-input';
import { Link } from '@alfalab/core-components-link';
import { nanoid } from 'nanoid'

import './App.css';

class App extends Component {

  state = {
    fields: {
      AttractionChannel: 'SourceDEALUL1',
      BranchId: 'MOCO',
      ClientManager: 'U_M0ZKG',
      ClientName: 'ООО "ЦВЕТОК"',
      ClientOGRN: '5105415093988',
      ClientTIN: '2875033373',
      CreditTerm: '36',
      IdDealSFA: nanoid(10),
      IdOffer: nanoid(10),
      LoanAmount: '500000',
      LoanProduct: 'LT01',
      ManagerDomain: 'MOSCOW',
      OfferVariantSequence: '1',
      PartnerPinEQ: 'UACOQA',
      PinEQ: 'UALERA',
      ProfileId: '123123',
      Rate: '15',
      RegionCode: '77',
      SelectedAccount: '40702810702840000000'
    },
    link: 'https://testjmb.alfabank.ru/credits/?'
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fields !== this.state.fields) {
      this.generateLink();
    }
  }

  generateLink = () => {
    const link = `https://testjmb.alfabank.ru/credits/?${Object.entries(this.state.fields).map((field) => `${field[0]}=${field[1]}`).join('&')}`
    this.setState({ link })
  }

  handleClickButton = () => {
    this.generateLink();
  }

  handleChangeInput = (event, { value }) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: value
      }
    })
  }

  handleClickButtonRandomOffer = () => {
    this.setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        IdOffer: nanoid(10)

      }
    }))
  }

  handleClickButtonRandomIdDealSFA = () => {
    this.setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        IdDealSFA: nanoid(10)

      }
    }))
  }

  render() {
    return (
      <div className="app">
        <Typography.Title tag="h1" view="small" className="title">
          Генерация ссылки для открытия анкеты ЕКП
        </Typography.Title>
        <div className="container-fields">
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='IdDealSFA'
            name='IdDealSFA'
            value={this.state.fields['IdDealSFA']}
            rightAddons={(
              <Button
                size="xs"
                view="transparent"
                onClick={this.handleClickButtonRandomIdDealSFA}>
                random
              </Button>
            )}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='IdOffer'
            name='IdOffer'
            value={this.state.fields['IdOffer']}
            rightAddons={(
              <Button
                size="xs"
                view="transparent"
                onClick={this.handleClickButtonRandomOffer}>
                random
              </Button>
            )}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='AttractionChannel'
            name='AttractionChannel'
            value={this.state.fields['AttractionChannel']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='BranchId'
            name='BranchId'
            value={this.state.fields['BranchId']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ClientManager'
            name='ClientManager'
            value={this.state.fields['ClientManager']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ClientName'
            name='ClientName'
            value={this.state.fields['ClientName']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ClientOGRN'
            name='ClientOGRN'
            value={this.state.fields['ClientOGRN']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ClientTIN'
            name='ClientTIN'
            value={this.state.fields['ClientTIN']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='CreditTerm'
            name='CreditTerm'
            value={this.state.fields['CreditTerm']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='LoanAmount'
            name='LoanAmount'
            value={this.state.fields['LoanAmount']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='LoanProduct'
            name='LoanProduct'
            value={this.state.fields['LoanProduct']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ManagerDomain'
            name='ManagerDomain'
            value={this.state.fields['ManagerDomain']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='OfferVariantSequence'
            name='OfferVariantSequence'
            value={this.state.fields['OfferVariantSequence']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='PartnerPinEQ'
            name='PartnerPinEQ'
            value={this.state.fields['PartnerPinEQ']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='PinEQ'
            name='PinEQ'
            value={this.state.fields['PinEQ']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='ProfileId'
            name='ProfileId'
            value={this.state.fields['ProfileId']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='Rate'
            name='Rate'
            value={this.state.fields['Rate']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='RegionCode'
            name='RegionCode'
            value={this.state.fields['RegionCode']}
          />
          <Input
            className="field"
            onChange={this.handleChangeInput}
            label='SelectedAccount'
            name='SelectedAccount'
            value={this.state.fields['SelectedAccount']}
          />
        </div>
        <Button
          className="button"
          view='primary'
          onClick={this.handleClickButton}>
          Сгенерировать
        </Button>
        <Link
          className="link"
          view='default'
          rel='noopener'
          target='_blank'
          href={this.state.link}
        >
          {this.state.link}
        </Link>
      </div>
    );
  }
}

export default App;
