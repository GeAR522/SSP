require 'rails_helper'

RSpec.describe "forms#create", type: :request do
  subject(:make_request) do
    jsonapi_post "ssp/forms", payload
  end

  describe 'basic create' do
    let(:params) do
      attributes_for(:form)
    end
    let(:payload) do
      {
        data: {
          type: 'forms',
          attributes: params
        }
      }
    end

    it 'works' do
      expect(FormResource).to receive(:build).and_call_original
      expect {
        make_request
        expect(response.status).to eq(201), response.body
      }.to change { Form.count }.by(1)
    end
  end
end
