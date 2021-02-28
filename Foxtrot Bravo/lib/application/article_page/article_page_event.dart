part of 'article_page_bloc.dart';

@freezed
abstract class ArticlePageEvent with _$ArticlePageEvent {
  const factory ArticlePageEvent.initialEvent(String articleId) = InitialEvent;
}