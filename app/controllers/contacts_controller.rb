class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Спасибо за ваше сообщение. Вскоре мы с вами свяжемся!'
    else
      flash.now[:error] = 'Ошибка отправки сообщения.'
      render :new
    end
  end

end
