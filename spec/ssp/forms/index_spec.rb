require 'rails_helper'

RSpec.describe "forms#index", type: :request do
  let(:params) { {} }

  subject(:make_request) do
    jsonapi_get "ssp/forms", params: params
  end

  describe 'basic fetch' do
    let!(:form1) { create(:form) }
    let!(:form2) { create(:form) }

    it 'works' do
      expect(FormResource).to receive(:all).and_call_original
      make_request
      expect(response.status).to eq(200), response.body
      expect(d.map(&:jsonapi_type).uniq).to match_array(['forms'])
      expect(d.map(&:id)).to match_array([form1.id, form2.id])
    end
  end
end
