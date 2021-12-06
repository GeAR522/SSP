require 'rails_helper'

RSpec.describe "forms#show", type: :request do
  let(:params) { {} }

  subject(:make_request) do
    jsonapi_get "ssp/forms/#{form.id}", params: params
  end

  describe 'basic fetch' do
    let!(:form) { create(:form) }

    it 'works' do
      expect(FormResource).to receive(:find).and_call_original
      make_request
      expect(response.status).to eq(200)
      expect(d.jsonapi_type).to eq('forms')
      expect(d.id).to eq(form.id)
    end
  end
end
